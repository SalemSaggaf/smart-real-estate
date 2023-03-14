import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import areas from '../../Data/Areas';
import './AreaDetailsPage.css';

function AreaDetailsPage ({}) {
    const params = useParams();
    const [areaInfo, setAreaInfo] = useState({});
    useEffect(() => {
        console.log('params: ', params);
        const _areainfo = areas.find(item => item.id === params.areaId);
        console.log('_areainfo: ', _areainfo);
        setAreaInfo(_areainfo);
    }, []);

    useEffect(() => {
        console.log('areaInfo: ', areaInfo);
    }, [areaInfo]);

    return (
        <div className='area-detail-container'>
            <div className='area-detail-attractions'>
                <h2>المؤثرات</h2>
                <div className='attraction-item'>
                    <div className='attraction-item-is-avaliable'></div>
                    <div className='attraction-item-content'>
                        <p className='attraction-item-title'>عدد الشوارع المطلة على للعقار</p>
                        <p className='attraction-item-subtitle'>{areaInfo.steertCount} شوارع</p>
                    </div>
                </div>
                <div className='attraction-item'>
                    <div className='attraction-item-is-avaliable'></div>
                    <div className='attraction-item-content'>
                        <p className='attraction-item-title'>النطاق العمراني</p>
                        <p className='attraction-item-subtitle'>{areaInfo.streetInCity ? 'ضمن النطاق العمراني' : 'ليش ضمن النطاق العمراني'}</p>
                    </div>
                </div>
                <div className='attraction-item'>
                    <div className='attraction-item-is-avaliable'></div>
                    <div className='attraction-item-content'>
                        <p className='attraction-item-title'>المدينة</p>
                        <p className='attraction-item-subtitle'>{areaInfo.cityName}</p>
                    </div>
                </div>

                <div className='attraction-item'>
                    <div className='attraction-item-is-avaliable'></div>
                    <div className='attraction-item-content'>
                        <p className='attraction-item-title'>المشاريع المستقبلية</p>
                        <p className='attraction-item-subtitle'>{areaInfo.futureProject ? 'يوجد مشاريع مستقبلية' : 'لا يوجد مشاريع مستقبلية'}</p>
                    </div>
                </div>
                <div className='attraction-item'>
                    <div className='attraction-item-is-avaliable'></div>
                    <div className='attraction-item-content'>
                        <p className='attraction-item-title'>الخدمات المتوفرة</p>
                    </div>
                </div>
                {areaInfo.highway ? <div className='avaliable-services'>
                    <div className='avaliable-services-is-avaliable'></div>
                    <div className='attraction-item-content'>
                        <p className='attraction-item-title'>شوارع رئيسية</p>
                    </div>
                </div> : <></>}
                {areaInfo.airport ? <div className='avaliable-services'>
                    <div className='avaliable-services-is-avaliable'></div>
                    <div className='attraction-item-content'>
                        <p className='attraction-item-title'>المطار</p>
                    </div>
                </div> : <></>}
                { areaInfo.school ? <div className='avaliable-services'>
                    <div className='avaliable-services-is-avaliable'></div>
                    <div className='attraction-item-content'>
                        <p className='attraction-item-title'>مدارس</p>
                    </div>
                </div> : <></>}
                {areaInfo.mosque ? <div className='avaliable-services'>
                    <div className='avaliable-services-is-avaliable'></div>
                    <div className='attraction-item-content'>
                        <p className='attraction-item-title'>مساجد</p>
                    </div>
                </div> : <></>}
                {areaInfo.grocery ? <div className='avaliable-services'>
                    <div className='avaliable-services-is-avaliable'></div>
                    <div className='attraction-item-content'>
                        <p className='attraction-item-title'>متاجر</p>
                    </div>
                </div> : <></>}
                {areaInfo.attractions ? <div className='avaliable-services'>
                    <div className='avaliable-services-is-avaliable'></div>
                    <div className='attraction-item-content'>
                        <p className='attraction-item-title'>معالم سياحية</p>
                    </div>
                </div> : <></>}
            </div>
            <div className='area-detail-right-side'>
                <div className='area-detail-img' style={{backgroundImage: `url(${areaInfo.img})`}}></div>
                <div className='area-detail-info'>
                    <div className='area-detail-utilities'>
                        <h4>البنية التحتية</h4>
                        {areaInfo.water ? <div className='attraction-item'>
                            <div className='attraction-item-is-avaliable'></div>
                            <div className='attraction-item-content'>
                                <p className='attraction-item-title'>ماء</p>
                            </div>
                        </div> : <></>}
                        {areaInfo.electicity ? <div className='attraction-item'>
                            <div className='attraction-item-is-avaliable'></div>
                            <div className='attraction-item-content'>
                                <p className='attraction-item-title'>كهرباء</p>
                            </div>
                        </div> : <></>}
                        {areaInfo.sewage ? <div className='attraction-item'>
                            <div className='attraction-item-is-avaliable'></div>
                            <div className='attraction-item-content'>
                                <p className='attraction-item-title'>صرف صحي</p>
                            </div>
                        </div> : <></>}
                    </div>
                    <div className='prices-container'>
                        <div className='past-price-container'>
                            <div className='past-price'>
                                <p className='past-price-title'>السعر السابق</p>
                                <p className='past-price-value'>{areaInfo.pastPrice} ريال</p>
                            </div>
                        </div>
                        <div className='past-price-container' >
                            <div className='past-price'>
                                <p className='past-price-title'>السعر الحالي</p>
                                <p className='past-price-value'>{areaInfo.currentPrice} ريال</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AreaDetailsPage;