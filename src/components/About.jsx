import React from 'react'
import Logo from "../assets/logo.jpg"
import { Fade, Slide } from 'react-reveal';

const About = () => {
    return (
        <div className=' about-us mt-5'>
            <Slide right>  <Fade>
            <div className="  about-us-container">



                <div className="about-us-title"> 
                 <h1 className='about-us-header'>EXPO YAPİ HAKKINDA</h1>
                 <p>Expo Yapı, inşaat sektöründe lider bir şirkettir. Kuruluşumuzdan bu yana sürekli olarak büyümekte ve gelişmekte olan şirketimiz, yenilikçi projeleri ve müşteri odaklı yaklaşımıyla sektördeki güçlü konumunu sürdürmektedir. Müşteri memnuniyetine verdiğimiz önem ve kaliteden ödün vermeden gerçekleştirdiğimiz projelerle, sektördeki öncü konumumuzu koruyoruz.

Expo Yapı olarak, müşteri memnuniyetini en üst seviyede tutmak için çalışıyoruz. Her bir projemizde, müşterilerimizin ihtiyaçlarını anlamak, beklentilerini karşılamak ve onlara değer katmak için özveriyle çalışıyoruz. Müşterilerimizle yakın işbirliği içinde çalışarak, onların özel taleplerini dikkate alıyor ve projeleri onların beklentilerine uygun şekilde hayata geçiriyoruz.

Profesyonel ve deneyimli bir ekibe sahibiz. Expo Yapı olarak, mühendisler, mimarlar, teknisyenler ve nitelikli işçilerden oluşan uzman bir kadroya sahibiz. Her bir projede, ekip çalışması ve iletişim ön planda tutularak, başarıyla tamamlanması için birlikte çalışıyoruz. Ekip üyelerimiz, sektördeki yenilikleri yakından takip ederek, projelerimize en son teknolojileri entegre etmek için sürekli olarak kendilerini geliştiriyorlar.</p>
                </div>
                <div className="about-img"><img src={Logo} alt="" /></div>
            </div>
            </Fade></Slide>
        </div>
    )
}

export default About
