<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <title>
        Фильм
    </title>
<head>
    <style><%@include file="/styles/style.css"%></style>
    <style><%@include file="/styles/filmFolderStyle.css"%></style>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
</head>

<body>
    <div id="zatemnenie">
        <div class="menu">
            <div class="menu-content">
                <!-- checked в зависомости от того с какой вкладки начинается взяимодествие с меню -->
                <!-- свойство name="inset" отвечает за то, чтобы состояние checked могло быть только у 1 меню -->
                <!-- КРЕСТИК -->
                <div id="cross" class="cross menu-head"></div>

                <div class="menu-group">
                    <div class="menu-in">
                        <div class="menu-info">
                            <label>
                                <span class="menu-info-label">Имя пользователя</span>
                                <input type="text" size="40"><br>
                            </label>
                        </div>
                        <div class="menu-info">
                            <label>
                                <span class="menu-info-label">Пароль</span>
                                <input type="password" size="40"><br>
                            </label>
                        </div>
                        <span class="close">Войти</span>
                    </div>

                    <div class="menu-out">
                        <div class="menu-info">
                            <label>
                                <span class="menu-info-label">Имя пользователя</span>
                                <input type="text" size="40"><br>
                            </label>
                        </div>
                        <div class="menu-info">
                            <label>
                                <span class="menu-info-label">Пароль</span>
                                <input type="password" size="40"><br>
                            </label>
                        </div>
                        <div class="menu-info">
                            <label>
                                <span class="menu-info-label">Эл. почта</span>
                                <input type="email" size="40"><br>
                            </label>
                        </div>
                        <button class="close" onClick="outRegPage()">Зарегистрироваться</button>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div id="block">
        <button class="buttonIn" onClick="inPage()"> Вход </button>
        <button class="buttonReg" onClick="regPage()"> Регистрация </button>
    </div>

    <div id="filmBlock2">
        <div id="imgBorder2">

        </div>
        <div id="textBlock2">

            <div id="crOpis2"> Краткое описание:
            </div>
            <div id="crOpisValue2">
            </div>
            <div id="Year2">
                Год выпуска:
            </div>
            <div id="YearValue2">
            </div>
            <div id="Res2">
                Режиссёр:
            </div>
            <div id="ResValue2">
            </div>
            <div id="Raiting2">
                Рейтинг:
            </div>
            <div id="RaitingValue2">
            </div>
            <div id="Region2">
                Страна:
            </div>
            <div id="RegionValue2">
            </div>
            <div id="Price2">
                Сборы:
            </div>
            <div id="PriceValue2">
            </div>
        </div>

        <div id="name2">
            Название
        </div>
        <video id = "Player" controls >
                <source src="E:\Torrents\Q.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
            </video>
                             

    </div>
    <button id="buttonBack2" onClick = "filmLoad()" ></button>

</body>

   <script><%@include file='/js/filmsBlock.js'%></script>
	<script><%@include file='/js/scripts.js'%></script>
</html>