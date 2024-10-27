
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './ChiefsisChronology.css';
import supabase from '../Config/SupabaseClient';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const ChiefsisChronology = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1985 + 1 }, (_, index) => 1985 + index);

    const [fetchError, setFetchError] = useState(null);
    const [chiefs, setChiefs] = useState([]);

    useEffect(() => {
        const fetchChiefs = async () => {
            const { data, error } = await supabase
                .from('cheif')
                .select('kegyear, portfolio, picture')
                .eq('portfolio', 'Chief')
                .order('kegyear', { ascending: true });


            if (error) {
                setFetchError('Unable to fetch chiefs data');
                setChiefs([]);
                console.log(error);
            } else {
                setChiefs(data);
                setFetchError(null);
            }
        };

        fetchChiefs();
    }, []);

    return (
        <>
            <Header />
            <section className='chief-section'>
                <div className="container">
                    <div className="headdd">
                        <h1 className='hhhhhhhh'><span className='highlight'>Ilya Odua</span> Kegite Year</h1>
                        <p>Kindly click on kegyear to view members of the selected year</p>
                    </div>
                    
                    {fetchError && (<p className='error'>{fetchError}</p>)}

                    <div className="keg-year-list">
                        {chiefs.map((chief) => (
                            <div className="year-box" key={chief.kegyear} style={{ cursor: 'pointer' }}>
                                <Link to={`/members/${chief.kegyear}`}>
                                    <div className="data-box">
                                        <img 
                                        src={chief.picture} 
                                        alt={`Chief ${chief.kegyear}`} 
                                        className="new-chief-img"
                                        />
                                        <div className="chief-overlay">
                                        
                                            {chief.kegyear} Keg Year
                                        </div>
                                    </div>
                                </Link>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ChiefsisChronology;














































