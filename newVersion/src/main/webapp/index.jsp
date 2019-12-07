<html>
<head>
<%@ page contentType="text/html;charset=utf-8" %>
	<title> Kino</title>
	<style><%@include file="/styles/style.css"%></style>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
</head>

<body>

  <div id="zatemnenie">
    <div class="menu">
      <div class="menu-content">
        <!-- checked в зависомости от того с какой вкладки начинается взяимодествие с меню -->
        <!-- свойство name="inset" отвечает за то, чтобы состояние checked могло быть только у 1 меню -->
        <input type="radio" name="inset" id="btn-in">
        <!-- с помощью for связывается label c input по id -->
        <label for="btn-in" class="menu-title menu-head">Войти</label>

        <input type="radio" name="inset" id="btn-out">
        <label for="btn-out" class="menu-title menu-head">Регистрация</label>

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
                <input id = "login" type="text" size="40"><br>
              </label>
            </div>
            <div class="menu-info">
              <label>
                <span class="menu-info-label">Пароль</span>
                <input id = "password" type="password" size="40"><br>
              </label>
            </div>
            <div class="menu-info">
              <label>
                <span class="menu-info-label">Эл. почта</span>
                <input id = "eMail" type="email" size="40"><br>
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

<div id ="slideMenu">

 <button class="slideMenuButtonR" onClick="rigthInMenuSlider()"></button>
 <button class="slideMenuButtonL" onClick="leftInMenuSlider()"></button>

</div>

<div id = "filmBlock"></div>

<button id = "nextButton"> next -> </button>

<button id = "backButton"> <- back </button>

<div id = "imgArray">

<img src="https://kinogo.by/uploads/cache/7/8/a/d/4/d/e/1/9/1493642778_kremnievaya-dolina-200x300.jpg" class="slide-single" alt="">

<img src="https://kinogo.by/uploads/cache/e/1/5/a/c/4/1/0/8/1500822446-1781101091-shrek-KINOGO_BY-200x300.jpg" class="slide-single" alt="">

<img src="https://kinogo.by/uploads/cache/c/e/f/5/7/f/1/3/5/689-kinogo-by-200x300.jpg" class="slide-single" alt="">

<img src="https://kinogo.by/uploads/cache/b/0/9/a/7/4/f/a/2/1567266314-393115042-mandalorec-KINOGO_BY-200x300.jpg" class="slide-single" alt="">

<img src="https://kinogo.by/uploads/cache/e/0/b/9/3/2/0/3/8/1575619078_mv5bnjizzjljzmqtogniyi00ymy2lwe1mgytn2vlmmeyzdblmzrmxkeyxkfqcgdeqxvymtkxnjuynq._v1_sy1000_sx666_al_-200x300.jpg" class="slide-single" alt="">

<img src="https://kinogo.by/uploads/cache/b/6/6/5/2/3/0/5/7/1509792719-1475584429-kriminalnoe-chtivo-KINOGO_BY-200x300.jpg" class="slide-single" alt="">
<img src="https://kinogo.by/uploads/cache/a/4/3/1/2/a/3/8/e/1503056990-1097093764-rik-i-morti-KINOGO_BY-200x300.jpg" class="slide-single" alt="">
<img src="https://kinogo.by/uploads/cache/f/c/9/b/9/c/b/5/7/1505651558_h-5qhqkglqc-200x300.jpg" class="slide-single" alt="">

</div>

</body>
	<script><%@include file='/js/filmsBlock.js'%></script>
	<script><%@include file='/js/scripts.js'%></script>
</html>