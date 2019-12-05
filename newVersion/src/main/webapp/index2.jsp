<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title> test</title>

	
	<style><%@include file="/styles/style.css"%></style>
  
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

          <div  class="menu-out">
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
      <button id = "exitButton" onClick="exitButton()"> exit </button>
      <div id = "nameLabel"> Привет, </div>
 </div>

<div id ="slideMenu">

 <button class="slideMenuButtonR" onClick="rigthInMenuSlider()"></button>
 <button class="slideMenuButtonL" onClick="leftInMenuSlider()"></button>

</div>

<div id = "filmBlock"></div>

<button id = "nextButton"> next -> </button>

<button id = "backButton"> <- back </button>



<div id = "imgArray">

<img src="o.png" class="slide-single" alt="">

<img src="x.png" class="slide-single" alt="">

<img src="o1.png" class="slide-single" alt="">

<img src="x1.png" class="slide-single" alt="">

<img src="o2.png" class="slide-single" alt="">

<img src="x2.png" class="slide-single" alt="">
<img src="o3.png" class="slide-single" alt="">
<img src="x3.png" class="slide-single" alt="">
<img src="o4.png" class="slide-single" alt="">
<img src="x4.png" class="slide-single" alt="">

</div>
</body>
<script><%@include file='/js/filmsBlock.js'%></script>
	<script><%@include file='/js/scripts.js'%></script>
</html>