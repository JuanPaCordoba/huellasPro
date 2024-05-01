<template>
    <div class="container">

        <aside class="left-section" :style="{ top: sidebarTop }">
            <div class="logo">
                <button class="menu-btn" id="menu-close" @click="closeMenu">
                    <i class='bx bx-log-out-circle'></i>
                </button>
                <img src="assets/logo.png">
                <a href="#">Huellitas</a>
            </div>

            <div class="sidebar">
                <div class="item">
                    <i class='bx bx-home-heart'></i>
                    <a href="#">Inicio</a>
                </div>
                <div class="item">
                    <i class='bx bx-spa bx-tada' @click="navigateToRoute"></i>
                    <a href="#">Spa</a>
                </div>
                <div class="item">
                    <i class='bx bx-food-menu bx-tada'></i>
                    <a href="#">Reservas</a>
                </div>
                <div class="item">
                    <i class='bx bx-plus-medical bx-tada'></i>
                    <a href="#">Vet</a>
                </div>
                <div class="item">
                    <i class='bx bx-message-add bx-tada'></i>
                    <a href="#">Citas</a>
                </div>
                <div class="item">
                    <i class='bx bx-cog bx-spin'></i>
                    <a href="#">Configuración</a>
                </div>
            </div>

            <div class="pic">
                <img src="">
            </div>

        </aside>

        <main>
            <header>
                <button class="menu-btn" id="menu-open" @click="openMenu">
                    <i class='bx bx-menu'></i>
                </button>
                <h5>Hello <b>REZA</b>, welcome back!</h5>
            </header>

            <div class="separator">
                <div class="info">
                    <h3>Spa</h3>
                    <a>Inicio</a>
                </div>
            </div>

            <div class="analytics">
                <div class="item">
                    <div class="progress">
                        <div class="info">
                            <h5>Bienvenido a Huellitas</h5>
                            <p>Su destino único para servicios de bienestar y cuidado de mascotas</p>

                        </div>

                    </div>
                    <img src="../../assets/7297522-removebg-preview.png" alt="">
                </div>

            </div>

            <div class="separator">
                <div class="info">
                    <h3>Servicios</h3>
                    <a href="#">Número de servicios ofrecidos</a>
                </div>
                <input type="date" value="2023-10-15">
            </div>

            <div class="planning">
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bx-shower bx-tada'></i>
                        </div>
                        <div class="details">
                            <h5>Baño y aseo</h5>
                        </div>
                    </div>
                    <h9>250</h9>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bxs-dog bx-tada'></i>
                        </div>
                        <div class="details">
                            <h5>Spa y bienestar</h5>
                        </div>
                    </div>
                    <p>55</p>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bxs-cat bx-tada'></i>
                        </div>
                        <div class="details">
                            <h5>Corte de pelo y estilismo</h5>
                        </div>
                    </div>
                    <p>45</p>
                </div>
            </div>
        </main>

        <aside class="right-section">
            <div class="top">
                <i class='bx bx-bell'></i>
                <div class="profile">
                    <div class="left">
                        <img src="../../../public/images/persona3.jpg">
                        <div class="user">
                            <h5>Reza Mehdikhanlou</h5>
                            <a href="#">Admin</a>
                        </div>
                    </div>
                    <i id="iconMenu" class='bx bx-cog bx-spin' style="color: rgb(255, 255, 255);"></i>
                </div>
            </div>

            <div class="separator" id="first">
                <h4>Estadisticas</h4>
            </div>

            <div class="stats">
                <div class="item">
                    <div class="top">
                        <p>Servicios</p>
                        <p>Totales</p>
                    </div>
                    <div class="bottom">
                        <i class='bx bx-customize bx-spin' style='text-align: center; color:#a2e041'></i>
                        <h3>65</h3>
                    </div>
                </div>
                <div class="item">
                    <div class="top">
                        <p>Reservas</p>
                        <p>Activas</p>
                    </div>
                    <div class="bottom">
                        <i class='bx bx-checkbox-checked bx-tada' style='color:#a2e041'></i>
                        <h3>250</h3>
                    </div>
                </div>
                <div class="item">
                    <div class="top">
                        <p>Clientes</p>
                    </div>
                    <div class="bottom">
                        <i class='bx bx-user-pin bx-tada' style='color:#a2e041'></i>
                        <h3>100</h3>
                    </div>
                </div>
            </div>


        </aside>

    </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarTop: "-60vh"
    };
  },
  methods: {
    openMenu() {
      this.sidebarTop = "0";
    },
    closeMenu() {
      this.sidebarTop = "-60vh";
    },
    navigateToRoute() {
      const ruta = '/home';
      this.$router.push(ruta);
    }
  }
};
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    height: 100vh;
}
main {
    border-right: 2px solid #F0F0F0;
    border-left: 2px solid #F0F0F0;
    padding: 40px 40px 0 40px;
}
</style>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
}

a{
    text-decoration: none;
    color: #369FFF;
}

i{
    font-size: 24px;
}


.container .left-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
}

.container .left-section .logo{
    display: flex;
    align-items: center;
    gap: 10px;
}

.container .left-section .logo img{
    width: 40px;
    height: 40px;
    object-fit: cover;
}

.container .left-section .logo a{
    font-weight: 800;
    font-family: cursive;
    font-size: 20px;
    color: #2b1303;
}

.menu-btn {
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #f8dab8;
    border-radius: 6px;
    cursor: pointer;
    display: none;
}

.menu-btn i {
    font-size: 18px;
    color: #d16500;
}

.container .left-section .sidebar{
    display: flex;
    flex-direction: column;
    gap: 20px;
}



.container .left-section .sidebar .item{
    display: flex;
    gap: 20px;
    cursor: pointer;
}

.container .left-section .sidebar i{
    color: #BDBDBD;
    transition: all 0.3s ease;
}



.container .left-section .sidebar a{
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 14px;
    color: #BDBDBD;
    position: relative;
    transition: all 0.3s ease;
}

.container .left-section .sidebar .item a:hover{
    background-color: #fce9ce;
    left: 0.5rem;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.container .left-section .sidebar .item a::after{
    position: absolute;
    content: "";
    width: 0px;
    height: 0px;
    background-color: #2f71af;
    right: -30px;
    border-radius: 50%;
    top: 0;
    transform: translateY(116%);
    transition: all 0.3s ease;
}

.tem

.container .left-section .sidebar .item#active a::after{
    width: 8px;
    height: 8px;
}

.container .left-section .pic  img{
    width: 160px;
}

.container .left-section .upgrade{
    background: #EBF6FF;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 24px;
    margin-bottom: 20px;
    border-radius: 18px;
    cursor: pointer;
}

.container .left-section .upgrade .link{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container .left-section .upgrade .link a{
    font-size: 12px;
}

main{
    border-right: 2px solid #F0F0F0;
    border-left: 2px solid #F0F0F0;
    padding: 40px 40px 0 40px;
}

main header{
    display: flex;
    align-items: center;
    gap: 15px;
}

main header h5{
    font-size: 18px;
    color: #eba85c;
    font-weight: 400;
}

main .separator{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}

main .separator .info{
    align-items: center;
    gap: 30px;
}

main .separator .info h3{
    font-size: 30px;
    color: #eba85c;
}

main .separator .info a{
    margin-top: 6px;
    font-size: 14px;
    color: #4d1807;
}

main .separator .search{
    display: flex;
    align-items: center;
    gap: 14px;
}

main .separator .search i{
    font-size: 20px;
    color: #BDBDBD;
}

main .separator .search input{
    border: none;
    font-size: 14px;
    width: 80px;
    outline: none;
}

main .separator .search input::placeholder{
    color: #BDBDBD;
}

main .analytics{
    gap: 20px;
    margin-top: 20px;
}

main .analytics .item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 180px;
    min-width: 214px;
    padding: 20px;
    border-radius: 20px;
}

main .analytics .item .progress{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

main .analytics .item .progress .info h5{
    color: #422600;
    font-size: 18px;
    font-weight: bold;
}

main .analytics .item .progress .info p{
    display: flex;
    color: #422600;
    font-size: 10px;
}



main .analytics .item .progress .progress-bar{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
}

.analytics {
    display: flexbox;
}

.item img {
    position: static;
    width: 35%;
    height: auto;
    border-radius: 10px;

}

main .analytics .item:nth-child(1) .progress .progress-bar{
    background: radial-gradient(closest-side, #006ED3 79%, transparent 80% 100%),
    conic-gradient(#208BEE 25%, #fff 0%);
}

main .analytics .item:nth-child(2) .progress .progress-bar{
    background: radial-gradient(closest-side, #FF993A 79%, transparent 80% 100%),
    conic-gradient(#FF7E07 50%, #fff 0%);
}

main .analytics .item:nth-child(3) .progress .progress-bar{
    background: radial-gradient(closest-side, #8AC53E 79%, transparent 80% 100%),
    conic-gradient(#6EB33D 75%, #fff 0%);
}

main .analytics .item:nth-child(4) .progress .progress-bar{
    background: radial-gradient(closest-side, #FFD043 79%, transparent 80% 100%),
    conic-gradient(#FFC000 25%, #fff 0%);
}

main .analytics .item .progress .progress-bar::before{
    font-size: 10px;
    color: #fff;
}

main .analytics .item:nth-child(1) .progress .progress-bar::before,
main .analytics .item:nth-child(4) .progress .progress-bar::before{
    content: "75%";
}

main .analytics .item:nth-child(2) .progress .progress-bar::before{
    content: "50%";
}

main .analytics .item:nth-child(3) .progress .progress-bar::before{
    content: "25%";
}

main .analytics .item i{
    font-size: 80px;
    color: #fff;
}

main .analytics .item:nth-child(1){
    background: #fcf7f4;
    border: 1px solid #e9e0da;
}

main .analytics .item:nth-child(2){
    background: #FF993A;
}

main .analytics .item:nth-child(3){
    background: #8AC53E;
}

main .analytics .item:nth-child(4){
    background: #FFD043;
}

main .separator input{
    border: none;
    color: #ffa538;
    font-weight: bold;
    outline: none;

}

input[type="date"]::-webkit-calendar-picker-indicator{
    opacity: 0.5;
    font-size: 16px;
    cursor: pointer;
}

main .planning{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
}

main .planning .item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #F7F7F7;
    border-radius: 20px;
}

main .planning .item .left{
    display: flex;
    align-items: center;
    gap: 10px;
}

main .planning .item .left .icon{
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

main .planning .item:nth-child(1) .left .icon{
    background: #D1E6F9;
}

main .planning .item:nth-child(1) .left .icon i{
    color: #369FFF;
}

main .planning .item:nth-child(2) .left .icon{
    background: #F9E5D2;
}

main .planning .item:nth-child(2) .left .icon i{
    color: #FF993A;
}

main .planning .item:nth-child(3) .left .icon{
    background: #E2EDD2;
}

main .planning .item:nth-child(3) .left .icon i{
    color: #8AC53E;
}

main .planning .item:nth-child(4) .left .icon{
    background: #F9F0D3;
}

main .planning .item:nth-child(4) .left .icon i{
    color: #FFD143;
}

main .planning .item .left .details h5{
    font-size: 12px;
    font-weight: 600;
}

main .planning .item .left .details p{
    font-size: 9px;
    text-align: left;
    font-weight: bold;
    color: #BDBDBD;
}

main .planning .item > i{
    cursor: pointer;
}

.container .right-section{
    padding: 40px 40px 0 40px;
}


.container .right-section .top{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container .right-section .top > i{
    color: #909090;
    position: relative;
    cursor: pointer;
}

.container .right-section .top > i::after{
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    background: #EB5757;
    border-radius: 50%;
    right: 0;
}

.container .right-section .top .profile{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: #ffd0a5;
    width: 244px;
    height: 60px;
    border-radius: 16px;
}

.container .right-section .top .profile > i{
    cursor: pointer;
}

.container .right-section .top .profile .left{
    display: flex;
    gap: 15px;
}

.container .right-section .top .profile .left img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
}

.container .right-section .top .profile .left .user h5{
    font-size: 14px;
    font-weight: 600;
    color: #fff;
}

.container .right-section .top .profile .left .user a{
    font-size: 12px;
    color: #fff;
}

.container .right-section .separator#first{
    margin-top: 8px;
}

.container .right-section .separator h4{
    font-weight: bold;
    color: #eb9a29;
    font-size: 24px;
    margin-top: 20px;
}

.container .right-section .stats{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    gap: 10px;
}



.container .right-section .stats .item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 190px;
    padding: 25px;
    background: #f7ffd9;
    border-radius: 20px;
}

.container .right-section .stats .item .top{
    display: flex;
    flex-direction: column;
    align-items: start;
}

.container .right-section .stats .top p{
    font-size: 16px;
    color: #8ea3b7ec;
    font-weight: 500;
}

.container .right-section .stats .item .bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container .right-section .stats .item .bottom .line{
    width: 4px;
    height: 30px;
    background: #c3ff36;
    border-radius: 20px;
}

.container .right-section .stats .item .bottom h3{
    font-size: 40px;
    color: #afe06f;
}

.container .right-section .weekly{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px;
    background: #F7F7F7;
    border-radius: 16px;
}

.container .right-section .weekly .title{
    display: flex;
    align-items: center;
    gap: 20px;
}

.container .right-section .weekly .title .line{
    width: 6px;
    height: 50px;
    background: #006ED3;
    border-radius: 20px;
}

.container .right-section .weekly h5{
    font-size: 16px;
}

.container .right-section .weekly .progress-bar{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: radial-gradient(closest-side, #f7f7f7 79%, transparent 80% 100%),
    conic-gradient(#CCC 25%, #006ED3 0%);
}

.container .right-section .weekly .progress-bar::before{
    content: "3/4";
    font-size: 14px;
    color: #000;
}

@media screen and (max-width: 1200px) {
    
    .container{
        grid-template-columns: 1fr 6fr 5fr;
    }

    .container .left-section,
    .container main,
    .container .right-section{
        padding: 20px 20px 0 20px;
    }

    .container .left-section .logo a,
    .container .left-section .sidebar a,
    .container .left-section .pic img,
    .container .left-section .upgrade{
        display: none;
    }

}

@media screen and (max-width: 992px) {
    
    .container{
        grid-template-columns: 1fr 1fr;
    }

    .container .left-section{
        position: fixed;
        height: 60vh;
        background-color: #fff;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        top: -60vh;
    }

    .container .left-section .logo{
        flex-direction: column;
        gap: 20px;
    }

    .container .left-section .logo .menu-btn,
    main header .menu-btn{
        display: flex;
    }

    main h5{
        font-size: 16px;
    }

    main .separator .info{
        gap: 15px;
    }

    main .separator .info h3,
    .container .right-section .separator h4{
        font-size: 20px;
    }

    .container .right-section .separator p{
        font-size: 14px;
    }

    main .analytics .item{
        min-width: 160px;
    }

    main .analytics .item i{
        display: none;
    }

    main .planning{
        grid-template-columns: 1fr;
        gap: 10px;
    }

    main .planning .item{
        padding: 8px;
    }

    .container .right-section .stats .item{
        height: 160px;
        padding: 20px;
    }

    .container .right-section .stats .item .top p{
        font-size: 14px;
    }

    .container .right-section .stats .item .bottom h3{
        font-size: 36px;
    }

}

@media screen and (max-width: 768px) {
    
    .container{
        position: relative;
        grid-template-columns: 1fr;
    }

    .container .right-section > .top{
        top: 0;
        right: 0;
        width: 100%;
        z-index: -100;
    }

    .container .right-section .weekly{
        margin-bottom: 20px;
    }
    .container .right-section .stats .item .top p{
        font-size: 10px;
    }

}
</style>