import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterNuevoUsuarioComponent } from './admin/form-register-nuevo-usuario/form-register-nuevo-usuario.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ReportesComponent } from './admin/reportes/reportes.component';
import { TablaEmpleadosComponent } from './admin/tabla-empleados/tabla-empleados.component';
import { TableTopClienteMasGananciaComponent } from './admin/table-top-cliente-mas-ganancia/table-top-cliente-mas-ganancia.component';
import { TableTopClienteMasVentasComponent } from './admin/table-top-cliente-mas-ventas/table-top-cliente-mas-ventas.component';
import { TableTop10ClientesMasPedidosComponent } from './admin/table-top10-clientes-mas-pedidos/table-top10-clientes-mas-pedidos.component';
import { TableTop10ClientesMasProdventaComponent } from './admin/table-top10-clientes-mas-prodventa/table-top10-clientes-mas-prodventa.component';
import { TableTop10ProdMasVendidoComponent } from './admin/table-top10-prod-mas-vendido/table-top10-prod-mas-vendido.component';
import { CarritoComponent } from './comun/carrito/carrito.component';
import { DetalleProductoComponent } from './comun/detalle-producto/detalle-producto.component';
import { FormAgregarComponent } from './comun/form-agregar/form-agregar.component';
import { FormPublicarComponent } from './comun/form-publicar/form-publicar.component';
import { HistorialCompraComponent } from './comun/historial-compra/historial-compra.component';
import { HistorialVentaComponent } from './comun/historial-venta/historial-venta.component';
import { HomepageComponent } from './comun/homepage/homepage.component';
import { MisProductosComponent } from './comun/mis-productos/mis-productos.component';
import { LoginComponent } from './general/login/login.component';
import { RegisterComponent } from './general/register/register.component';
import { HomePaqueteriaComponent } from './paqueteria/home-paqueteria/home-paqueteria.component';
import { SeguiminetoPedidosComponent } from './paqueteria/seguimineto-pedidos/seguimineto-pedidos.component';
import { SolicitudesIngresoComponent } from './paqueteria/solicitudes-ingreso/solicitudes-ingreso.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'carrito',component:CarritoComponent},
  {path:'publicar',component:FormPublicarComponent},
  {path:'adminHome',component:HomeAdminComponent},
  {path:'empleados',component:TablaEmpleadosComponent},
  {path:'reportes',component:ReportesComponent},
  {path:'homePaquete',component:HomePaqueteriaComponent},
  {path:'solicitudes',component:SolicitudesIngresoComponent},
  {path:'seguimiento',component:SeguiminetoPedidosComponent},
  {path:'detalle',component:DetalleProductoComponent},
  {path:'nuevo',component:FormRegisterNuevoUsuarioComponent},
  {path:'misProductos',component:MisProductosComponent},
  {path:'historialVenta',component:HistorialVentaComponent},
  {path:'historialCompra',component:HistorialCompraComponent},
  {path:'clientesMasProdVenta',component:TableTop10ClientesMasProdventaComponent},
  {path:'clienteMasPedido',component:TableTop10ClientesMasPedidosComponent},
  {path:'prodMasVendido',component:TableTop10ProdMasVendidoComponent},
  {path:'clienteMasVentas',component:TableTopClienteMasVentasComponent},
  {path:'clienteMasGanancia',component:TableTopClienteMasGananciaComponent},
  {path:'formAgregar',component:FormAgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
