<template>
    <div class="container">
        <aside class="left-section">
            <div class="logo">
                <button class="menu-btn" id="menu-close">
                    <i class='bx bx-log-out-circle'></i>
                </button>
                <img id="logoHuellitas" src="assets/logo.png">
                <a href="#">Huellitas</a>
            </div>
            <div class="sidebar">
                <div class="item">
                    <i class='bx bx-user-pin bx-tada'></i>
                    <a href="#">Usuarios</a>
                </div>
                <div class="item">
                    <i class='bx bxs-cat bx-tada'></i>
                    <a href="#">Mascotas</a>
                </div>
                <div class="item">
                    <i id="miIcono" class='bx bx-spa bx-tada'></i>
                    <a href="barSide.vue">Spa</a>
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
            </div>

            <div class="pic">
                <img src="assets/pro.png">
            </div>

        </aside>

        <main>
            <header>
                <button class="menu-btn" id="menu-open">
                    <i class='bx bx-menu'></i>
                </button>
                <h5>Hola <b>REZA</b>, Bienvenido de otra vez!</h5>
            </header>

            <div class="separator">
                <div class="info">
                    <h3>Inicio</h3>
                    <a href="#">Estadisticas Generales</a>
                </div>
                <div class="search">
                    <i class='bx bx-search'></i>
                    <input type="text" placeholder="Search...">
                </div>
            </div>

            <div class="analytics">
                <div class="item">
                    <div class="progress">
                        <div class="info">
                            <h5>Atendidos</h5>
                            <b>
                                <p>35 Atendidos</p>
                            </b>
                        </div>
                        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                    <i class='bx bxs-dog bx-tada'></i>
                </div>
                <div class="item">
                    <div class="progress">
                        <div class="info">
                            <h5>Clientes</h5>
                            <b>
                                <p>30 Clientes</p>
                            </b>
                        </div>
                        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                    <i class='bx bx-user-voice bx-tada'></i>
                </div>
            </div>

            <div class="separator">
                <div class="info">
                    <h3>Servicios</h3>
                    <a href="#">Analisis de servicios</a>
                </div>
                <input type="date" value="2023-10-15">
            </div>

            <div class="bottom-data">
                <div class="orders">
                    <div class="header">
                        <i class='bx bx-receipt'></i>
                        <h3>Servicios</h3>
                        <i class='bx bx-filter'></i>
                        <i class='bx bx-search'></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Servicio</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="/assets/persona3.jpg">
                                    <p>John Doe</p>
                                </td>
                                <td>Baño y aseo</td>
                                <td>14-08-2023</td>
                                <td><span class="status completed">Realizado</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/persona3.jpg">
                                    <p>John Doe</p>
                                </td>
                                <td>Baño y aseo</td>
                                <td>14-08-2023</td>
                                <td><span class="status pending">Pendiente</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/persona3.jpg">
                                    <p>John Doe</p>
                                </td>
                                <td>Baño y aseo</td>
                                <td>14-08-2023</td>
                                <td><span class="status process">En curso</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </main>

        <aside class="right-section">
            <div class="top">
                <i class='bx bx-bell'></i>
                <div class="profile">
                    <div class="left">
                        <img src="assets/persona3.jpg">
                        <div class="user">
                            <h5>Reza Mehdikhanlou</h5>
                            <a href="#">Admin</a>
                        </div>
                    </div>
                    <i id="iconMenu" class='bx bx-cog bx-spin' style="color: rgb(255, 255, 255);"></i>

                </div>
            </div>

            <div class="separator" id="first">
                <h4>Clientes</h4>
            </div>

            <div class="bottom-data-1">
                <div class="orders">
                    <div class="header">
                        <i class='bx bx-receipt'></i>
                        <h3>Clientes</h3>
                        <i class='bx bx-filter'></i>
                        <i class='bx bx-search'></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Email</th>
                                <th>Telefono</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="/assets/persona3.jpg">
                                    <p>John Doe</p>
                                </td>
                                <td>jhduque@gmail.com</td>
                                <td>3004151209</td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/persona3.jpg">
                                    <p>John Doe</p>
                                </td>
                                <td>jhduque@gmail.com</td>
                                <td>3004151209</td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/persona3.jpg">
                                    <p>John Doe</p>
                                </td>
                                <td>jhduque@gmail.com</td>
                                <td>3004151209</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </aside>

    </div>
</template>

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


a {
    text-decoration: none;
    color: #369FFF;
}

i {
    font-size: 24px;
}

.container .left-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
}

.container .left-section .logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.container .left-section .logo img {
    width: 40px;
    height: 40px;
    object-fit: cover;
}

.container .left-section .logo a {
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

.container .left-section .sidebar {
    display: flex;
    flex-direction: column;
    gap: 20px;
}



.container .left-section .sidebar .item {
    display: flex;
    gap: 20px;
    cursor: pointer;
}

.container .left-section .sidebar i {
    color: #BDBDBD;
    transition: all 0.3s ease;
}



.container .left-section .sidebar a {
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 14px;
    color: #BDBDBD;
    position: relative;
    transition: all 0.3s ease;
}

.container .left-section .sidebar .item a:hover {
    background-color: #fce9ce;
    left: 0.5rem;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.container .left-section .sidebar .item a::after {
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

.tem .container .left-section .sidebar .item#active a::after {
    width: 8px;
    height: 8px;
}

.container .left-section .pic img {
    width: 160px;
}

.container .left-section .upgrade {
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

.container .left-section .upgrade .link {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container .left-section .upgrade .link a {
    font-size: 12px;
}




main header h5 {
    font-size: 18px;
    color: #eba85c;
    font-weight: 400;
}

main .separator {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}

main .separator .info {
    align-items: center;
    gap: 30px;
}

main .separator .info h3 {
    font-size: 30px;
    color: #eba85c;
}

main .separator .info a {
    margin-top: 6px;
    font-size: 14px;
    color: #4d1807;
}

main .separator .search {
    display: flex;
    align-items: center;
    gap: 14px;
}

main .separator .search i {
    font-size: 20px;
    color: #BDBDBD;
}

main .separator .search input {
    border: none;
    font-size: 14px;
    width: 80px;
    outline: none;
}

main .separator .search input::placeholder {
    color: #BDBDBD;
}

main .analytics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
}

main .analytics .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 140px;
    min-width: 214px;
    padding: 20px;
    border-radius: 20px;
}

main .analytics .item .progress {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

main .analytics .item .progress .info h5 {
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
}

main .analytics .item .progress .info p {
    color: #ffffff;
    font-size: 12px;
}



main .analytics .item .progress .progress-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
}

.item img {
    position: static;
    width: 35%;
    height: auto;
    border-radius: 10px;

}

main .analytics .item:nth-child(1) .progress .progress-bar {
    background: radial-gradient(closest-side, #006ED3 79%, transparent 80% 100%),
        conic-gradient(#208BEE 25%, #fff 0%);
}

main .analytics .item:nth-child(2) .progress .progress-bar {
    background: radial-gradient(closest-side, #FF993A 79%, transparent 80% 100%),
        conic-gradient(#FF7E07 50%, #fff 0%);
}

main .analytics .item:nth-child(3) .progress .progress-bar {
    background: radial-gradient(closest-side, #8AC53E 79%, transparent 80% 100%),
        conic-gradient(#79b84c 75%, #fff 0%);
}

main .analytics .item:nth-child(4) .progress .progress-bar {
    background: radial-gradient(closest-side, #FFD043 79%, transparent 80% 100%),
        conic-gradient(#FFC000 25%, #fff 0%);
}

main .analytics .item .progress .progress-bar::before {
    font-size: 10px;
    color: #fff;
}

main .analytics .item:nth-child(1) .progress .progress-bar::before,
main .analytics .item:nth-child(4) .progress .progress-bar::before {
    content: "75%";
}

main .analytics .item:nth-child(2) .progress .progress-bar::before {
    content: "50%";
}

main .analytics .item:nth-child(3) .progress .progress-bar::before {
    content: "25%";
}

main .analytics .item i {
    font-size: 80px;
    color: #fff;
}

main .analytics .item:nth-child(1) {
    background: #8799fc;
    border: 1px solid #e9e0da;
}

main .analytics .item:nth-child(2) {
    background: #f7ae6a;
}

main .analytics .item:nth-child(3) {
    background: #c8ff81;
}

main .analytics .item:nth-child(4) {
    background: #ffdb6f;
}

main .separator input {
    border: none;
    color: #ffa538;
    font-weight: bold;
    outline: none;
    width: 100px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0.5;
    font-size: 16px;
    cursor: pointer;
}

main .planning {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
}

main .planning .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #F7F7F7;
    border-radius: 20px;
}

main .planning .item .left {
    display: flex;
    align-items: center;
    gap: 10px;
}

main .planning .item .left .icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

main .planning .item:nth-child(1) .left .icon {
    background: #D1E6F9;
}

main .planning .item:nth-child(1) .left .icon i {
    color: #369FFF;
}

main .planning .item:nth-child(2) .left .icon {
    background: #F9E5D2;
}

main .planning .item:nth-child(2) .left .icon i {
    color: #FF993A;
}

main .planning .item:nth-child(3) .left .icon {
    background: #E2EDD2;
}

main .planning .item:nth-child(3) .left .icon i {
    color: #8AC53E;
}

main .planning .item:nth-child(4) .left .icon {
    background: #F9F0D3;
}

main .planning .item:nth-child(4) .left .icon i {
    color: #FFD143;
}

main .planning .item .left .details h5 {
    font-size: 12px;
    font-weight: 600;
}

main .planning .item .left .details p {
    font-size: 9px;
    text-align: left;
    font-weight: bold;
    color: #BDBDBD;
}

main .planning .item>i {
    cursor: pointer;
}

.container .right-section {
    padding: 40px 40px 0 40px;
}


.container .right-section .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container .right-section .top>i {
    color: #909090;
    position: relative;
    cursor: pointer;
}

.container .right-section .top>i::after {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    background: #EB5757;
    border-radius: 50%;
    right: 0;
}

.container .right-section .top .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: #ffd0a5;
    width: 244px;
    height: 60px;
    border-radius: 16px;
}

.container .right-section .top .profile>i {
    cursor: pointer;
}

.container .right-section .top .profile .left {
    display: flex;
    gap: 15px;
}

.container .right-section .top .profile .left img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
}

.container .right-section .top .profile .left .user h5 {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
}

.container .right-section .top .profile .left .user a {
    font-size: 12px;
    color: #fff;
}

.container .right-section .separator#first {
    margin-top: 8px;
}

.container .right-section .separator h4 {
    font-weight: bold;
    color: #eb9a29;
    font-size: 24px;
    margin-top: 20px;
}

.container .right-section .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    gap: 10px;
}



.container .right-section .stats .item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 190px;
    padding: 25px;
    background: #f7ffd9;
    border-radius: 20px;
}

.container .right-section .stats .item .top {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.container .right-section .stats .top p {
    font-size: 16px;
    color: #8ea3b7ec;
    font-weight: 500;
}

.container .right-section .stats .item .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container .right-section .stats .item .bottom .line {
    width: 4px;
    height: 30px;
    background: #c3ff36;
    border-radius: 20px;
}

.container .right-section .stats .item .bottom h3 {
    font-size: 40px;
    color: #afe06f;
}

.container .right-section .weekly {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px;
    background: #F7F7F7;
    border-radius: 16px;
}

.container .right-section .weekly .title {
    display: flex;
    align-items: center;
    gap: 20px;
}

.container .right-section .weekly .title .line {
    width: 6px;
    height: 50px;
    background: #006ED3;
    border-radius: 20px;
}

.container .right-section .weekly h5 {
    font-size: 16px;
}

.container .right-section .weekly .progress-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: radial-gradient(closest-side, #f7f7f7 79%, transparent 80% 100%),
        conic-gradient(#CCC 25%, #006ED3 0%);
}

.container .right-section .weekly .progress-bar::before {
    content: "3/4";
    font-size: 14px;
    color: #000;
}

@media screen and (max-width: 1200px) {

    .container {
        grid-template-columns: 1fr 6fr 5fr;
    }

    .container .left-section,
    .container main,
    .container .right-section {
        padding: 20px 20px 0 20px;
    }

    .container .left-section .logo a,
    .container .left-section .sidebar a,
    .container .left-section .pic img,
    .container .left-section .upgrade {
        display: none;
    }

}

@media screen and (max-width: 992px) {

    .container {
        grid-template-columns: 1fr 1fr;
    }

    .container .left-section {
        position: fixed;
        height: 60vh;
        background-color: #fff;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        top: -60vh;
    }

    .container .left-section .logo {
        flex-direction: column;
        gap: 20px;
    }

    .container .left-section .logo .menu-btn,
    main header .menu-btn {
        display: flex;
    }

    main h5 {
        font-size: 16px;
    }

    main .separator .info {
        gap: 15px;
    }

    main .separator .info h3,
    .container .right-section .separator h4 {
        font-size: 20px;
    }

    main .analytics .item {
        min-width: 160px;
    }

    main .analytics .item i {
        display: none;
    }

    main .planning {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    main .planning .item {
        padding: 8px;
    }

    .container .right-section .stats .item {
        height: 160px;
        padding: 20px;
    }

    .container .right-section .stats .item .top p {
        font-size: 14px;
    }

    .container .right-section .stats .item .bottom h3 {
        font-size: 36px;
    }

}

@media screen and (max-width: 768px) {

    .container {
        display: grid;
        grid-template-columns: 1fr;

        position: relative;
    }

    .top {
        top: 0;
        right: 0;
        width: 100%;
        z-index: -1;
        /* Mantenemos el valor negativo de z-index */
    }

    .container .right-section .weekly {
        margin-bottom: 20px;
    }

}

/** table order style */

.bottom-data {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 24px;
    margin-top: 24px;
    width: 100%;
    color: var(--dark);
}

.bottom-data>div {
    border-radius: 20px;
    border: 1px solid #4efd3e;
    box-shadow: #2cdb00;
    background: #f0ffd7;
    padding: 24px;
    overflow-x: auto;
}

.bottom-data .header {
    display: flex;
    align-items: center;
    grid-gap: 16px;
    margin-bottom: 24px;
}

.bottom-data .header h3 {
    margin-right: auto;
    font-size: 24px;
    font-weight: 600;
}

.bottom-data .header .bx {
    cursor: pointer;
}

.bottom-data .orders {
    flex-grow: 1;
    flex-basis: 500px;
}

.bottom-data .orders table {
    width: 100%;
    border-collapse: collapse;
}

.bottom-data .orders table th {
    padding-bottom: 12px;
    font-size: 13px;
    text-align: left;
    border-bottom: 1px solid var(--grey);
}

.bottom-data .orders table td {
    padding: 16px 0;
    font-size: 11px;
}

.bottom-data .orders table tr td:first-child {
    display: flex;
    align-items: center;
    grid-gap: 12px;
    padding-left: 6px;
}

.bottom-data .orders table td img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
}

.bottom-data .orders table tbody tr {
    cursor: pointer;
    transition: all 0.3s ease;
}

.bottom-data .orders table tbody tr:hover {
    background: var(--grey);
}

.bottom-data .orders table tr td .status {
    font-size: 10px;
    padding: 6px 16px;
    color: #fff;
    border-radius: 20px;
    font-weight: 700;
}

.bottom-data .orders table tr td .status.completed {
    background: #2cdb00;
}

.bottom-data .orders table tr td .status.process {
    background: #ffd900;
}

.bottom-data .orders table tr td .status.pending {
    background: #ff0000;
}

.bottom-data-1 {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 24px;
    margin-top: 24px;
    width: 100%;
    color: var(--dark);
}

.bottom-data-1>div {
    border-radius: 20px;
    border: 1px solid #fd9a3e;
    box-shadow: #db8300;
    background: #ffe9d7;
    padding: 24px;
    overflow-x: auto;
}

.bottom-data-1 .header {
    display: flex;
    align-items: center;
    grid-gap: 16px;
    margin-bottom: 24px;
}

.bottom-data-1 .header h3 {
    margin-right: auto;
    font-size: 24px;
    font-weight: 600;
}

.bottom-data-1 .header .bx {
    cursor: pointer;
}

.bottom-data-1 .orders {
    flex-grow: 1;
    flex-basis: 500px;
}

.bottom-data-1 .orders table {
    width: 100%;
    border-collapse: collapse;
}

.bottom-data-1 .orders table th {
    padding-bottom: 12px;
    font-size: 13px;
    text-align: left;
    border-bottom: 1px solid var(--grey);
}

.bottom-data-1 .orders table td {
    padding: 16px 0;
    font-size: 11px;
}

.bottom-data-1 .orders table tr td:first-child {
    display: flex;
    align-items: center;
    grid-gap: 12px;
    padding-left: 6px;
}

.bottom-data-1 .orders table td img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
}

.bottom-data-1 .orders table tbody tr {
    cursor: pointer;
    transition: all 0.3s ease;
}

.bottom-data-1.orders table tbody tr:hover {
    background: var(--grey);
}

.bottom-data-1 .orders table tr td .status {
    font-size: 10px;
    padding: 6px 16px;
    color: #fff;
    border-radius: 20px;
    font-weight: 700;
}

.bottom-data-1 .orders table tr td .status.completed {
    background: #2cdb00;
}

.bottom-data-1 .orders table tr td .status.process {
    background: #ffd900;
}

.bottom-data-1 .orders table tr td .status.pending {
    background: #ff0000;
}
</style>