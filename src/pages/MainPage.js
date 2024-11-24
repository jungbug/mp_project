import React, { useRef, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import '../css/MainPage.css';
import cam1 from '../asset/cam1.png'
import cam2 from '../asset/cam2.png'
import cam3 from '../asset/cam3.png'
import cam4 from '../asset/cam4.png'
import cam5 from '../asset/cam5.jpg'
import cam6 from '../asset/cam6.jpg'
import cam7 from '../asset/cam7.jpg'
import findman from '../asset/findman.png'
// import video_2 from '../asset/video_2.mp4'
import aurgmentation from '../asset/aurgmentation.png'
import augmentation2 from '../asset/augmentation2.png'

function MainPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: aurgmentation, alt: 'augmentation 1' },
        { src: augmentation2, alt: 'augmentation 2' },
        // 원하는 만큼 추가
    ];

    // 파일 선택 시 실행되는 함수
    const [activeStates, setActiveStates] = useState({});

    const handleToggle = (id) => {
        setActiveStates((prevStates) => ({
            ...prevStates,
            [id]: !prevStates[id], // 현재 ID의 상태를 반전시킴
        }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = () => {
                    setSelectedImage(e.target.result);
                };
            };
            reader.readAsDataURL(file);
        }
    };
    

    return (
        <div className='super_div'>
            <div className='left_space'>
                <div className='inner_div activate'>
                    <span className='name_tag'>Cam1</span>
                    <img src={cam1} alt="cam1" className='cam_img'/>
                </div>
                <div className='inner_div activate'>
                    <span className='name_tag'>Cam2</span>
                    <img src={cam2} alt="cam2" className='cam_img'/>
                </div>
                <div className='inner_div'>
                    <span className='name_tag'>Cam3</span>
                    <img src={cam3} alt="cam3" className='cam_img'/>
                </div>
                <div className='inner_div'>
                    <span className='name_tag'>Cam4</span> 
                    <img src={cam4} alt="cam4" className='cam_img'/>
                </div>
                <div className='inner_div'>
                    <span className='name_tag'>Cam5</span>
                    <video src="/video/video_2.mp4" className='cam_img' autoPlay loop muted></video>
                    {/* <img src={cam5} alt="cam5" className='cam_img'/> */}
                </div>
                <div className='inner_div'>
                    <span className='name_tag'>Cam6</span>
                    <img src={cam6} alt="cam6" className='cam_img'/>
                </div>
                <div className='inner_div'>
                    <span className='name_tag'>Cam7</span>
                    <img src={cam7} alt="cam7" className='cam_img'/>
                </div>
                <div className='inner_div span_two display_flex'>
                    <span className='name_tag'>accumulations</span>
                    {images.map((image, index) => (
                        <div key={index} onClick={() => handleToggle(index)} className='accumulations'>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={`accumulations_img ${activeStates[index] ? 'active' : ''}`}
                            />
                        </div>
                    ))}
                </div>
                {/* <div className='inner_div'>
                    <span className='name_tag'>Cam9</span>
                </div> */}
            </div>
            <div className='rightspace'>
                <div className='rightspace_img_preview'>
                        {selectedImage != null ? (
                            <div className='rightspace_img_div'>
                                <img src={selectedImage} alt="Preview" className='input_img'/>
                            </div>
                        ):(<div className='rightspace_input_text'>화면을 눌러 사진을 등록하세요</div>)}
                    <input type="file" accept="image/*" onChange={handleImageChange} className='rightspace_pic_input'/>
                </div>
                <div className='rightspace_history'>
                    <div className='histroy_div'>[24/11/12/07:52]cam1 taget find</div>
                    <div className='histroy_div'>[24/11/12/07:54]cam2 taget find</div>
                    <div className='histroy_div'>[24/11/12/07:55]cam2 taget find</div>
                    <div className='histroy_div'>[24/11/12/07:56]cam2 taget find</div>
                    <div className='histroy_div'>[24/11/12/07:57]cam2 taget find</div>
                </div>
            </div>
        </div>
    );
    
}

export default MainPage;
