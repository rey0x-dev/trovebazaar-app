//location son acento
export const branches = [
  {
    id: "br_coacalco",
    name: "Coacalco",
    location: "coacalco",
    status: "active",
    createdAt: "2026-06-01T00:00:00-06:00",
    archivedAt: null,
    salesTodayCents: 1842000,
    activePromotions: 2,
  },
  {
    id: "br_tultitlan",
    name: "Tultitlán",
    location: "tultitlan",
    status: "active",
    createdAt: "2026-06-01T00:00:00-06:00",
    archivedAt: null,
    salesTodayCents: 1422000,
    activePromotions: 1,
  },{
    id: "br_ecatepec",
    name: "Ecatepec",
    location: "ecatepec",
    status: "active",
    createdAt: "2026-10-01T00:00:00-06:00",
    archivedAt: null,
    salesTodayCents: 1042000,
    activePromotions: 3,
  },{
    id: "br_naucalpan",
    name: "Naucalpan",
    location: "naucalpan",
    status: "archived",
    createdAt: "2026-07-01T00:00:00-06:00",
    archivedAt: "2026-09-01T00:00:00-06:00",
        // Sucursal archivada: ventas y promociones "no aplican".
    // "archivada: ventas y promociones en 0; la UI muestra '-' según status"
    salesTodayCents: 0,
    activePromotions: 0,
  },
]