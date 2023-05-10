import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './general/login/login.component';
import { RegisterComponent } from './general/register/register.component';
import { NavbarComponent } from './comun/navbar/navbar.component';
import { HomepageComponent } from './comun/homepage/homepage.component';
import { CarritoComponent } from './comun/carrito/carrito.component';
import { FormPublicarComponent } from './comun/form-publicar/form-publicar.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { TablaEmpleadosComponent } from './admin/tabla-empleados/tabla-empleados.component';
import { ReportesComponent } from './admin/reportes/reportes.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { HomePaqueteriaComponent } from './paqueteria/home-paqueteria/home-paqueteria.component';
import { SolicitudesIngresoComponent } from './paqueteria/solicitudes-ingreso/solicitudes-ingreso.component';
import { SeguiminetoPedidosComponent } from './paqueteria/seguimineto-pedidos/seguimineto-pedidos.component';
import { NavbarPaqueteriaComponent } from './paqueteria/navbar-paqueteria/navbar-paqueteria.component';
import { loginServices } from './services/login.service';
import { DetalleProductoComponent } from './comun/detalle-producto/detalle-producto.component';
import { FormRegisterNuevoUsuarioComponent } from './admin/form-register-nuevo-usuario/form-register-nuevo-usuario.component';
import { MisProductosComponent } from './comun/mis-productos/mis-productos.component';
import { HistorialCompraComponent } from './comun/historial-compra/historial-compra.component';
import { HistorialVentaComponent } from './comun/historial-venta/historial-venta.component';
import { TableTop10ClientesMasProdventaComponent } from './admin/table-top10-clientes-mas-prodventa/table-top10-clientes-mas-prodventa.component';
import { TableTop10ClientesMasPedidosComponent } from './admin/table-top10-clientes-mas-pedidos/table-top10-clientes-mas-pedidos.component';
import { TableTop10ProdMasVendidoComponent } from './admin/table-top10-prod-mas-vendido/table-top10-prod-mas-vendido.component';
import { TableTopClienteMasVentasComponent } from './admin/table-top-cliente-mas-ventas/table-top-cliente-mas-ventas.component';
import { TableTopClienteMasGananciaComponent } from './admin/table-top-cliente-mas-ganancia/table-top-cliente-mas-ganancia.component';
import { FormAgregarComponent } from './comun/form-agregar/form-agregar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomepageComponent,
    CarritoComponent,
    FormPublicarComponent,
    HomeAdminComponent,
    TablaEmpleadosComponent,
    ReportesComponent,
    NavbarAdminComponent,
    HomePaqueteriaComponent,
    SolicitudesIngresoComponent,
    SeguiminetoPedidosComponent,
    NavbarPaqueteriaComponent,
    DetalleProductoComponent,
    FormRegisterNuevoUsuarioComponent,
    MisProductosComponent,
    HistorialCompraComponent,
    HistorialVentaComponent,
    TableTop10ClientesMasProdventaComponent,
    TableTop10ClientesMasPedidosComponent,
    TableTop10ProdMasVendidoComponent,
    TableTopClienteMasVentasComponent,
    TableTopClienteMasGananciaComponent,
    FormAgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [loginServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
