import React from "react";
import {ApiKey} from '../../api/constants'
import CinemaCards from "../../components/CinemaCards";
import { Grid } from "@mui/material";


class Home extends React.Component{
    state = {
        list: [],
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`)    
        .then((response)=>{
            return response.json();
        })
        .then((data) => this.setState({list: data.results}));
    }
    render(){
        const { list } = this.state;
        return (
                <Grid container spacing={3} justifyContent='center' columns={{
                    xs: 3,
                    sm: 3,
                    md: 3,
                }}>
                    {list.map((item) => (
                        <CinemaCards key={item.id} {...item} />
                    ))}
                </Grid>
        );
    }
}
export default Home;