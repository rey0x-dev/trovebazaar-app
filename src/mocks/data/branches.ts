export const branches = [
  {
    id: "br_coacalco",
    name: "Coacalco",
    domain: "coacalco.trovebazaar.mx",
    status: "active",
    createdAt: "2026-06-01T00:00:00-06:00",
    archivedAt: null,
    salesTodayCents: 1842000,
    activePromotions: 2,
  },
  {
    id: "br_tultitlan",
    name: "Tultitlán",
    domain: "tultitlan.trovebazaar.mx",
    status: "active",
    createdAt: "2026-06-01T00:00:00-06:00",
    archivedAt: null,
    salesTodayCents: 1422000,
    activePromotions: 1,
  },{
    id: "br_ecatepec",
    name: "Ecatepec",
    domain: "ecatepec.trovebazaar.mx",
    status: "active",
    createdAt: "2026-10-01T00:00:00-06:00",
    archivedAt: null,
    salesTodayCents: 1042000,
    activePromotions: 3,
  },{
    id: "br_naucalpan",
    name: "Naucalpan",
    domain: "naucalpan.trovebazaar.mx",
    status: "archived",
    createdAt: "2026-07-01T00:00:00-06:00",
    archivedAt: "2026-09-01T00:00:00-06:00",
        // Sucursal archivada: ventas y promociones "no aplican".
    // Se representan con null (distinto de 0, que significa "aplica y es cero").
    // PENDIENTE: confirmar con backend que responde null y no 0 ni omite el campo.
    salesTodayCents: null,
    activePromotions: null,
  },
]