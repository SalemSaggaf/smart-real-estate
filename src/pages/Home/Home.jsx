import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import './Home.css';
import DataTable from 'react-data-table-component';
import {Select, Button} from 'antd';
import { useNavigate } from 'react-router-dom';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function Home(props) {
    const navigate = useNavigate();
    const [areas, setAreas] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [chartData, setChartData] = useState({
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    });

    useEffect(() => {
        const _areas = JSON.parse(localStorage.getItem('areas'));
        if (_areas) {
            setAreas(_areas);
        }
    }, []);
    
    useEffect(() => {
        setTableData(areas.map(area => {
            return {
                name: area.name,
                id: area.id,
                areaSpace: area.areaSpace,
                recommendation: area.one_year_recommendation,
                percentage: area.one_year_percentage,

            }
        }));

        setChartData({
            labels: areas.filter(item => item.one_year_percentage > 0).map(area => area.name),
            datasets: [{
                label: 'الارتفاع',
                data: areas.filter(item => item.one_year_percentage > 0).map(area => area.one_year_percentage),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1
            }]
        })

    }, [areas]);

    const onPeriodChange = (value) => {
        let _areas = [...areas];
        for(let i = 0; i < _areas.length; i++) {
            let recommendation = false;
            let percentage = 20;
    
            switch (value) {
                case 'one_year':
                    _areas[i].recommendation = _areas[i].one_year_recommendation;
                    _areas[i].percentage = _areas[i].one_year_percentage;
                    break;
                case 'three_years':
                    _areas[i].recommendation = _areas[i].three_years_recommendation;
                    _areas[i].percentage = _areas[i].three_year_percentage;
                    break;
                case 'five_years':
                    _areas[i].recommendation = _areas[i].five_years_recommendation;
                    _areas[i].percentage = _areas[i].five_year_percentage;
                    break;
                default:
                    break;
            }
        }

        setTableData(areas.map(area => {
            return {
                name: area.name,
                id: area.id,
                areaSpace: area.areaSpace,
                recommendation: area.recommendation,
                percentage: area.percentage,

            }
        }));

        setChartData({
            labels: _areas.filter(item => item.percentage > 0).map(area => area.name),
            datasets: [{
                label: 'الارتفاع',
                data: _areas.filter(item => item.percentage > 0).map(area => area.percentage),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1
            }]
        })
        
    }

    const selectOptions = [
        {
            label: 'سنة',
            value: 'one_year'
        },
        {
            label: 'ثلاث سنين',
            value: 'three_years'
        },
        {
            label: 'خمس سنين',
            value: 'five_years'
        },
    ]
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    };

    const showDetailPage = (id) => {
        navigate(`/areas/${id}`);
    }

    const columns = [
        {
            name: 'الاسم',
            selector: row => row.name,
        },
        {
            name: 'الرقم التعريفي',
            selector: row => row.id,
        },
        {
            name: 'مساحة الارض',
            selector: row => `${row.areaSpace.toLocaleString()} متر مربع`,
        },
        {
            name: 'الافضلية (شراء \\ بيع)',
            selector: row => `${row.recommendation ? 'شراء' : 'بيع'}`,
            
        },
        {
            name: 'نسبة الارتفاع و الهبوط',
            selector: row => `${row.percentage} %`,
        },
        {
            name: 'اجراءات',
            cell: row => 
            <div>
                <Button style={{marginLeft: 10}} onClick={(e) => showDetailPage(row.id)}>تفاصيل</Button>
                <Button style={{background: 'red', color: 'white'}} onClick={(e) => deleteArea(row)}>حذف</Button>

            </div>
        },
    ];

    const deleteArea = (row) => {
        let _areas = [...areas];
        _areas = _areas.filter(area => area.id !== row.id);
        setAreas(_areas);
        localStorage.setItem('areas', JSON.stringify(_areas));
        setTableData(_areas.map(area => {
            return {
                name: area.name,
                id: area.id,
                areaSpace: area.areaSpace,
                recommendation: area.one_year_recommendation,
                percentage: area.one_year_percentage,
            }
        }));
    }


    const options = {
        // responsive: true,
        responsive: false,
        maintainAspectRatio: false,
        
    }

    return (
        <>
            <div className='periods-container'>
                {/* <h1>الفترات الزمنية</h1> */}
                <Select onChange={onPeriodChange} className='period-selector' style={{width: '20%'}} defaultValue={'one_year'} options={selectOptions}>
                </Select>
            </div>
            <div className='charts-row-1'>
                <Pie data={chartData} options={options} height={'300px'} width={'300px'} />
                <Bar options={options} data={chartData} height={'300px'} width={'350px'} />
            </div>
            <div>
                <DataTable
                    data={tableData}
                    columns={columns}
                />
                
            </div>
        </>
    )
}

export default Home;