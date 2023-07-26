<template>
    <div class="conteiner">
            <div class="conteiner__header">
                <h4>location</h4>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARNJREFUSEvt1DtKBEEURuFvUkFMlFEwEBF0DYMPUFNxG2IquBOZxEhwA+IKVIxUTH1grKGuQC6U0EhPVTnQmEyFTdV/7j11u3o6Xr2O800ARcP/rugYZ3gfUeoqNnA6qpVcB4c4wQs2WyAruMY89nHRBskB4mAERNBrqvSnk2Xcoo9HbOHrr4DY3waZqg2PgJpLXsBV6uQJMwl8jx185kapBhDnF5OupRSW1dIE1gLCdTgP97EesF2qvlZRhN8kRc9JUXy7w24JUuqgWfkbBphujGexkxygLfwjKYrRDWVzJV05wAGGCC0x57//5rXUySz2cDnOf3CE88xTEZD1cZ+K4ktZs6F0yTUZ2T0TQFFh54q+ARi0NBkujYiHAAAAAElFTkSuQmCC"/>
            </div>
            <span></span>
            <form action="">
                <div class="conteiner__detail">
                    <label for="city">city</label>
                    <input type="text" id="city" placeholder="tehran" autofocus required  v-model.lazy="cityName">
                </div>
                <div class="conteiner__detail">
                    <label for="countryCode">countrty code</label>
                    <input type="text" id="countryCode" placeholder="IR" required  v-model.lazy="countryCode">
                </div>
            </form>
            <div class="conteiner__button-box" >
                <button @click="getDetail"> submit </button>
            </div>
    </div>
</template>
    
<script setup>
import { useRouter } from "vue-router";
const router = useRouter()
import { weatherData } from "../stores/counter.js";
const weather = weatherData();
import { ref } from "vue";

let apiKey = ref("95ab95f64a7d4c51bb369effdbd8b7f4") ;
let cityName = ref("") ;
let countryCode = ref("") ;
async function getDetail(){
    await weather.getWeather([ apiKey.value , cityName.value , countryCode.value ])
    router.push('/Show')
}
</script>

<style lang="scss" scoped>
.conteiner{
display: flex;
flex-direction: column;
border-radius: 15px;
width: 40vw;
font-size: 18px;
box-shadow: 2px 2px 10px black;

    > span {
        border-bottom: 1px solid black;
    }
    &__header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 30px;
    > img {
        &:hover{
            cursor: pointer
        }
    }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 20px 30px;
    }

    &__detail{
        display: flex;
        flex-direction: column;
        gap: 5px;
        input {
            border: 0.5px solid gray;
            border-radius: 6px;
            padding: 4px;
            &:hover , &:focus{
                box-shadow: 1.5px 1.5px 5px navy;
                outline:none;
            }
        }
    }
    &__button-box{
        margin: 10px 30px 20px;
        display: flex;
        gap: 15px;
        button{
            padding: 6px 9px;
            border-radius: 3px;
            border: 0px;
            font-size: 13px;
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
}
</style>
