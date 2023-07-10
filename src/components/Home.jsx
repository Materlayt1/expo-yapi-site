import React from 'react'
import Slider from '../components/Slider';
import Background from './Background';
import Video from "../assets/tanitim.mp4"
import { GiOfficeChair } from 'react-icons/gi';
import { AiOutlineProject } from 'react-icons/ai';
import İmg1 from "../assets/çeşme/cesme2.jpg"
import İmg2 from "../assets/kusadasi/kusadası.jpg"


const Home = () => {
    return (
        <div className='home'>
            <Background />
            <div className="about">
                <div className="p"> <h3>Expo Yapı Hakkında</h3></div>
                <div className="about-container">
                    <div className="about-head text-center mt-5 ">
                        <h1>HEDEFİMİZ</h1>

                    </div>
                    <div className="about-title">
                        <ul><li> Müşterilerimize kaliteli ve güvenilir yapılar sunarak, onların konforlu ve güvenli bir yaşam sürmelerini sağlamak.</li>
                            <li> Yeni yapılar inşa ederek ve mevcut yapıları yenileyerek, şehirlerin ve toplumların gelişimine katkıda bulunmayı hedefliyoruz.</li>
                            <li> Mühendislik ve tasarım becerilerini kullanarak, çevre dostu ve sürdürülebilir binalar inşa ederek, doğal kaynakları koruma ve enerji verimliliğini artırma amacı taşıyoruz.</li>

                        </ul>
                    </div>


                </div></div>
            <div className="tanitim">
                <div className="tanitim-about">
                    <div className="tanitim-head"> <h1>TARİHÇEMİZ</h1><span><i class="fa-sharp fa-solid fa-clock-rotate-left " ></i></span></div>

                    <p>Şirketimiz, 2018 yılında kurulmuştur. O zamandan beri, inşaat sektöründe müşterilerimize yüksek kaliteli hizmetler sunma hedefiyle çalışmaktayız.

                        Geçmişimizde, birçok büyük ölçekli inşaat projesine imza attık. Bu projeler arasında ticari binalar, konutlar, altyapı çalışmaları ve endüstriyel tesisler bulunmaktadır.

                        Yıllar geçtikçe, deneyimli ve uzman bir ekip oluşturduk ve teknolojik gelişmeleri takip ederek inşaat süreçlerimizi optimize ettik. Bu sayede müşterilerimize daha hızlı ve verimli projeler sunabilmekteyiz.</p>
                </div>
                <div className="tanitim-video">
                    <div className="tanitim-head mt-3"><h1>Tanıtım Videosu</h1> </div>
                    <video className='mt-5' controls>
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="project">
                <div className="project-container">
                    <div className="icons">
                        <h3>HİZMETLERİMİZ</h3>
                        <div className="icons-container">
                            <div className="icon">
                                <p><i class="fa-solid fa-building"></i></p>
                                <h1>Yap-Sat</h1>
                            </div>
                            <div className="icon">
                                <p><i class="fa-solid fa-brush"></i></p>
                                <h1>Yapı Market</h1>
                            </div>

                            <div className="icon">
                                <p><i class="fa-solid fa-wrench"></i></p>
                                <h1>Tadilat</h1>
                            </div>
                        </div>
                    </div>
                    <div className="project-title">
                        <h1>PRENSİBİMİZ</h1>
                        <div className='react-icon'>
                            <GiOfficeChair />
                            <div><h2>RAHATLIK</h2></div>
                        </div>
                        <div className='react-icon'>
                            <AiOutlineProject />
                            <div><h2>PROJELENDİRME</h2></div>
                        </div>
                        <div className='react-icon'>
                            <i class="fa-brands fa-pagelines"></i>
                            <div><h2>PEYZAJ</h2></div>
                        </div>

                    </div>




                </div>


            </div>

            <div className="project-buildd mt-5 ">
                <h1 className='text-center card-header mb-5'>PROJELERİMİZ</h1>
                <div className="project-build-container">
                    <a href="cesme-vilaları-proje" className='a'><div className="card ">
                        <div className="card-img"><img src={İmg1} alt="" /></div>
                        <div className="card-title">ÇEŞME VİLLALARI</div>
                        <div className="card-hover"><a href=""><i class="fa-solid fa-plus"></i></a></div>
                        <div className="card-hoverer"><a href="/cesme-vilaları-proje"><button className='btn btn-primary w-50 p-3'>İncele</button></a></div>
                        <div className=" card-hoverr"><a href=""></a></div>
                    </div>
                    </a>
                    <a href="kusadasi-vilaları-proje" className='a'><div className="card">
                        <div className="card-img"><img src={İmg2} alt="" /></div>
                        <div className="card-title">KUŞADASI VİLLALARI</div>
                        <div className="card-hover"><a href=""><i class="fa-solid fa-plus"></i></a></div>
                        <div className="card-hoverer"><a href="/kusadasi-vilaları-proje"><button className='btn btn-primary w-50 p-3'>İncele</button></a></div>
                        <div className=" card-hoverr"><a href=""></a></div>
                    </div>
                    </a>
                </div>
            </div>


            <div className="footer mt-5">
                <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12504.351265966412!2d27.1987004!3d38.4163354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9636f9aa098b7%3A0xc421a914705a2238!2sEXPO%20YAPI%20MARKET!5e0!3m2!1str!2str!4v1689001204477!5m2!1str!2str"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                <div className="contact">
                    <div className="phone"><a href="tel:+02323321475"><i class="fa-solid fa-phone"></i><span> TELEFON NO :+902323321475 </span></a> </div>
                    <div className="phone"><a href="email"><i class="fa-solid fa-envelope"></i><span> MAİL : expoyapi@gmail.com </span></a> </div>
                    <div className="phone"><a href="email"><i class="fa-solid fa-location-dot"></i><span> Adres : Merkez, Fevzi Paşa Cd. NO:31, 35080 Bornova/İzmir</span></a> </div>
                </div>
            </div>
            <div className="sub-footer">
            <p class="footer-bottom">&copy; 2023 Expo Yapi. Tüm hakları saklıdır.</p>
            </div>
        </div>
    )
}

export default Home