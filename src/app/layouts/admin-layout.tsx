import { Link, Outlet, type LinkProps } from '@tanstack/react-router'
import { Button } from '@/shared/ui/button';

import {
 
  LayoutDashboard,
  Tag,
  Package,
  Percent,
  Store,
  Smartphone,
  Grid2x2,
  Info,
  type LucideIcon,
} from "lucide-react";


const adminRoutes: { title: string; to: LinkProps["to"]; icon: LucideIcon; exact?: boolean;}[] = [
  {title: "Dashboard", to:"/admin", icon: LayoutDashboard, exact: true},
  {title: "Ventas", to:"/admin/sales", icon: Tag},
  {title: "Productos", to:"/admin/products", icon: Package},
  {title: "Promociones", to:"/admin/promotions", icon: Percent},
  {title: "Sucursales", to:"/admin/branches", icon: Store},
]

function AdminLayout(){
  return(

    <div className='flex h-screen overflow-hidden'> 
      {/*Menu Lateral */}
      <aside className='bg-sidebar flex w-48 shrink-0 flex-col border-r p-2'>
        <p className='flex items-center gap-3 px-3 py-8 font-black'>
          <Grid2x2 size={18} />
          TroveBazaar
        </p>
        <nav>
          {adminRoutes.map((item) => {
          const Icon = item.icon;
          return (
          <Link key={item.to}
          to={item.to}
          className='flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-sidebar-foreground hover:bg-sidebar-accent data-[status=active]:bg-sidebar-accent data-[status=active]:text-sidebar-accent-foreground'
          activeOptions={{exact: item.exact ?? false  }} 
          
          >
            <Icon size={18} strokeWidth={2} />
          {item.title}    
          </Link>
          )
          })}
        </nav>
        <Button asChild variant="outline" className='mt-auto w-full'>
          <Link to="/sell">
            <Smartphone size={18} />
            Ir a vista vendedor
          </Link>
        </Button>
      </aside>
    
      {/*Contenido de la pagina*/}      
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex shrink-0 items-center gap-2 border-b border-warning-foreground/20 bg-warning px-6 py-2 text-sm text-warning-foreground">
            <Info size={16} className="shrink-0" />
            <p>
              <strong>Demo de acceso abierto.</strong> Productos, sucursales y
              promociones de ejemplo se restauran periódicamente; lo que crees aquí
              puede desaparecer.
            </p>
          </div>
        <main className="flex-1 overflow-y-auto p-6 bg-background">
          <Outlet />
          
        </main>
        </div>

    </div>

  )
}


export {AdminLayout}
