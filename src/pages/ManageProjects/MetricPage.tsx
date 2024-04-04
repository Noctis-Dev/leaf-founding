import { Progress } from "flowbite-react"
import MetricData from "../../components/Metrics/MetricData"
import Group from "../../assets/metric-icons/users-group.png"
import View from "../../assets/metric-icons/eye.png"
import CalendarStart from "../../assets/metric-icons/calendar-plus.png"
import CalendarEnd from "../../assets/metric-icons/calendar-end.png"
import TwoRows from "../../assets/metric-icons/balance.png"
import DownRow from "../../assets/metric-icons/arrow-down.png"
import RowUP from "../../assets/metric-icons/arrow-up.png"
import Like from "../../assets/metric-icons/thumbs-up.png"
import Dislike from "../../assets/metric-icons/thumbs-down.png"
import Note from "../../assets/metric-icons/message-caption.png"
import Face from "../../assets/metric-icons/face-grin.png"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text } from 'recharts';


function MetricPage() {

    const data = [
        { name: 'Jan', Donaciones: 4000, Comunidad: 2400, amt: 2400 },
        { name: 'Feb', Donaciones: 3000, Comunidad: 1398, amt: 2210 },
        { name: 'Mar', Donaciones: 2000, Comunidad: 9800, amt: 2290 },
        { name: 'Apr', Donaciones: 2780, Comunidad: 3908, amt: 2000 },
        { name: 'May', Donaciones: 1890, Comunidad: 4800, amt: 2181 },
        { name: 'Jun', Donaciones: 2390, Comunidad: 3800, amt: 2500 },
        { name: 'Jul', Donaciones: 3490, Comunidad: 4300, amt: 2100 },
    ];

    return (
        <div className="p-10 overflow-y-auto h-screen w-full">
            <h1 className="text-4xl font-bold text-green-500">Proyecto Leaf</h1>
            <div className="flex flex-row justify-between items-center">
                <div className="w-3/4 ">
                    <Progress
                        progress={45}
                        progressLabelPosition="outside"
                        color="green"
                        textLabel="Meta $900,000"
                        textLabelPosition="outside"
                        size="xl"
                        labelProgress
                        labelText

                    />
                </div>
                <div className="text-white text-center">
                    <h1 className="text-4xl font-bold text-green-500">$400,000</h1>
                    <h5>Contribucion en Pesos MXN</h5>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full h-48 bg-gray-700 mt-14 p-10">
                <MetricData metric="400" desc="Patrocinadores" img={Group} />
                <MetricData metric="400" desc="Patrocinadores" img={CalendarStart} />
                <MetricData metric="400" desc="Patrocinadores" img={CalendarEnd} />
            </div>
            <h1 className="text-4xl font-bold text-green-500">Metricas de Donaciones</h1>
            <div className="w-full flex justify-center">
                <LineChart width={800} height={400} data={data}>
                    <Text x={300} y={30} textAnchor="middle" fontSize={18} fontWeight="bold">
                        Holaaaa
                    </Text>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Donaciones" stroke="#8884d8" />
                </LineChart>
            </div>
            <div className="flex flex-row justify-between items-center w-full h-48 bg-gray-700 mt-14 p-10">
                <MetricData metric="500 TVARA" desc="Donaciones (1er Milestone)" img={Group} />
                <MetricData metric="150 TVARA" desc="Media General" img={TwoRows} />
                <MetricData metric="300 TVARA" desc="Donacion Mas Alta" img={RowUP} />
                <MetricData metric="3 TVARA" desc="Donacion Mas Baja" img={DownRow} />
            </div>
            <h1 className="text-4xl font-bold text-green-500">Metricas de Comunidad</h1>
            <div className="flex flex-row justify-between items-center w-full h-48 bg-gray-700 mt-14 p-10">
                <MetricData metric="500" desc="Likes" img={Like} />
                <MetricData metric="150" desc="Dislikes" img={Dislike} />
                <MetricData metric="3000" desc="Views" img={View} />
                <MetricData metric="1000" desc="Comentarios" img={Note}/>
                <MetricData metric="Recibimiento" desc="Positivo" img={Face} />
            </div>
        </div>
    )
}

export default MetricPage