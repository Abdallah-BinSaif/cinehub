import {BarChart} from "@mantine/charts";


const data = [
    { month: 'January', totalMovie: 1200, kid: 900, TvShows: 200 },
    { month: 'February', totalMovie: 1900, kid: 1200, TvShows: 400 },
    { month: 'March', totalMovie: 400, kid: 1000, TvShows: 200 },
    { month: 'April', totalMovie: 1000, kid: 200, TvShows: 800 },
    { month: 'May', totalMovie: 800, kid: 1400, TvShows: 1200 },
    { month: 'June', totalMovie: 750, kid: 600, TvShows: 1000 },
];

const Charts = () => {
    return (
        <>
            <BarChart
                h={300}
                data={data}
                dataKey="month"
                series={[
                    { name: 'totalMovie', color: 'violet.6' },
                    { name: 'kid', color: 'blue.6' },
                    { name: 'TvShows', color: 'teal.6' },
                ]}
                tickLine="y"
            />
        </>
    );
};

export default Charts;