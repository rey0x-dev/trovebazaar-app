//location son acento
import type { Branch } from "@/features/branches/schemas"
export const branches:Branch[] = [
{
  branchId: 1,
  name: "Coacalco",
  status: "ACTIVO",
  location: "Coacalco",
  creationDate: "2026-06-01T00:00:00-06:00",
  archivedAt: null,
},
  {
    branchId: 2,
    name: "Tultitlán",
    location: "tultitlan",
    status: "ACTIVO",
    creationDate: "2026-06-01T00:00:00-06:00",
    archivedAt: null,

  },{
    branchId: 3,
    name: "Ecatepec",
    location: "ecatepec",
    status: "ACTIVO",
    creationDate: "2026-10-01T00:00:00-06:00",
    archivedAt: null,

  },{
    branchId: 4,
    name: "Naucalpan",
    location: "naucalpan",
    status: "ARCHIVADO",
    creationDate: "2026-07-01T00:00:00-06:00",
    archivedAt: "2026-09-01T00:00:00-06:00",
        // Sucursal archivada: ventas y promociones "no aplican".
    // "archivada: ventas y promociones en 0; la UI muestra '-' según status"

  },
]