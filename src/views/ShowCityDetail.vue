<template>
    <div class="conteiner">
        <h2> {{ weatherDetail.cityName }} </h2>
        <h3> {{ weatherDetail.weatherDescription }} </h3>
        <img :src="weatherDetail.src" alt="">
        <ul>
            <li>
                <div> temperature(kelvin): <span> {{ weatherDetail.temperature }}</span> </div>
                <div> min-temperature: <span> {{ weatherDetail.minTemperature }}</span> </div>
                <div> max-temperature: <span> {{ weatherDetail.maxTemperature }}</span> </div>
            </li>
            <li> pressure : <span> {{ weatherDetail.pressure }}</span> hpa </li>
            <li> humidity : <span> {{ weatherDetail.humidity }}</span> % </li>
            <li> wind speed : <span> {{ weatherDetail.windSpeed }}</span> m/s </li>
            <li> feels like(kelvin) : <span> {{ weatherDetail.feelsLike }}</span> </li>
            <li>
                <div> longitude : <span>{{ weatherDetail.longitude }}</span> </div>
                <div> latitude : <span>{{ weatherDetail.latitude }}</span> </div>
            </li>
        </ul>
        <button @click="changeLocation"> change location </button>
    </div>
    </template>
    
    <script setup>
    import { useRouter } from "vue-router";
    const router = useRouter()
    import { weatherData } from "../stores/counter.js";
    const weatherDetail = weatherData();

    function changeLocation() {
        router.push('/')
    }
    </script>
    
    <style lang="scss" scoped>
    .conteiner{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border-radius: 15px;
        font-size: 15px;
        box-shadow: 2px 2px 10px black;
        padding: 15px 20px;
        gap: 8px;
        background-color: rgb(35, 77, 114);
        ul {
            width: 100%;
            :first-child , :last-child {
                // display: flex;
                justify-content:space-evenly;
                align-items: center;
                gap: 10px;
            }
            li{
                display: flex;
                justify-content: center;
                padding: 10px;
                background-color: white;
                border: 1px solid gray;
                font-size: 14px;
                margin: 5px 0px;
                gap: 6px;
            }
        }
        button{
            margin-top: 5px;
            padding: 6px 9px;
            border-radius: 3px;
            border: 0px;
            font-size: 12px;
            border: 0.5px solid gray;
            border-radius: 6px;
            background-color: white;
            &:hover{
                background-color: navy;
                color: white;
                cursor: pointer;
            }
        }
    }
    
    </style>
    