"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  Activity,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
} from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { AnimatedCounter } from "@/components/animated-counter"

export function DashboardSection() {
  const { ref: titleRef, hasIntersected: titleVisible } = useIntersectionObserver()
  const { ref: dashboardRef, hasIntersected: dashboardVisible } = useIntersectionObserver()

  const metrics = [
    {
      title: "Ingresos Totales",
      value: "45,231",
      prefix: "€",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      color: "text-white",
    },
    {
      title: "Usuarios Activos",
      value: "2,350",
      change: "+180.1%",
      trend: "up",
      icon: Users,
      color: "text-white",
    },
    {
      title: "Pedidos",
      value: "12,234",
      change: "-19%",
      trend: "down",
      icon: ShoppingCart,
      color: "text-[#e60023]",
    },
    {
      title: "Conversión",
      value: "3.2",
      suffix: "%",
      change: "+4.3%",
      trend: "up",
      icon: Activity,
      color: "text-white",
    },
  ]

  const salesData = [
    { month: "Ene", value: 32000, height: 65 },
    { month: "Feb", value: 28000, height: 45 },
    { month: "Mar", value: 45000, height: 78 },
    { month: "Abr", value: 38000, height: 52 },
    { month: "May", value: 52000, height: 89 },
    { month: "Jun", value: 41000, height: 67 },
  ]

  const recentOrders = [
    { id: "#3210", customer: "Ana García", amount: "€250.00", status: "Completado", time: "2 min" },
    { id: "#3209", customer: "Carlos López", amount: "€150.00", status: "Pendiente", time: "5 min" },
    { id: "#3208", customer: "María Rodríguez", amount: "€350.00", status: "Completado", time: "10 min" },
    { id: "#3207", customer: "Juan Martín", amount: "€120.00", status: "Cancelado", time: "15 min" },
  ]

  const topProducts = [
    { name: "Producto Premium", sales: 1234, revenue: "€12,340", growth: 23 },
    { name: "Servicio Básico", sales: 987, revenue: "€9,870", growth: 18 },
    { name: "Plan Profesional", sales: 756, revenue: "€15,120", growth: 31 },
    { name: "Automatización", sales: 543, revenue: "€27,150", growth: 12 },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Dashboard de{" "}
            <span className="text-[#e60023] bg-gradient-to-r from-[#e60023] to-[#ff4757] bg-clip-text text-transparent">
              Ejemplo
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Así se ve un dashboard profesional creado por Alred - datos en tiempo real, métricas clave y control total
          </p>
        </div>

        <div
          ref={dashboardRef}
          className={`transition-all duration-1000 ${
            dashboardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Métricas principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className={`bg-gray-900/30 backdrop-blur-sm border-gray-800 hover:border-[#e60023]/50 transition-all duration-500 group hover:shadow-lg hover:shadow-[#e60023]/10 ${
                  dashboardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: dashboardVisible ? `${index * 100}ms` : "0ms",
                  transitionDuration: "600ms",
                }}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">{metric.title}</CardTitle>
                  <metric.icon className="h-4 w-4 text-gray-500 group-hover:text-[#e60023] transition-colors" />
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold ${metric.color} group-hover:text-[#e60023] transition-colors`}>
                    {metric.prefix}
                    <AnimatedCounter end={Number.parseInt(metric.value.replace(/,/g, ""))} />
                    {metric.suffix}
                  </div>
                  <div className="flex items-center text-xs">
                    {metric.trend === "up" ? (
                      <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                    )}
                    <span className={metric.trend === "up" ? "text-green-500" : "text-red-500"}>{metric.change}</span>
                    <span className="text-gray-400 ml-1">desde el mes pasado</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Gráfico de ventas */}
            <Card className="lg:col-span-2 bg-gray-900/30 backdrop-blur-sm border-gray-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Ventas Mensuales</CardTitle>
                    <CardDescription className="text-gray-400">
                      Evolución de ingresos en los últimos 6 meses
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="border-gray-700 text-black-300 hover:text-white hover:bg-black">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver detalles
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative h-64 flex items-end justify-between space-x-2 mb-4">
                  <div className="absolute left-0 top-0 text-xs text-gray-400">€60k</div>
                  <div className="absolute left-0 bottom-0 text-xs text-gray-400">€0</div>
                  {/* Valor máximo (derecha) */}

                  {salesData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center group h-full">
                      <div className="relative w-full flex flex-col-reverse items-end h-full">
                        <div
                          className="w-full bg-gradient-to-t from-[#e60023] to-[#ff4757] rounded-t-md transition-all duration-1000 hover:from-[#c5001e] hover:to-[#e60023] relative group-hover:scale-105"
                          style={{
                            height: dashboardVisible ? `${data.height}%` : "0%",
                            transitionDelay: `${index * 200}ms`,
                          }}
                        />
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          €{data.value.toLocaleString()}
                        </div>
                      </div>
                      <span className="text-xs text-gray-400 mt-2">{data.month}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                </div>
              </CardContent>
            </Card>

            {/* Top productos */}
            <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Top Productos</CardTitle>
                <CardDescription className="text-gray-400">Productos más vendidos este mes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 ${
                        dashboardVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                      }`}
                      style={{
                        transitionDelay: dashboardVisible ? `${index * 150}ms` : "0ms",
                      }}
                    >
                      <div className="flex-1">
                        <p className="font-medium text-white text-sm">{product.name}</p>
                        <p className="text-xs text-gray-400">{product.sales} ventas</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-white">{product.revenue}</p>
                        <div className="flex items-center text-xs text-green-500">
                          <TrendingUp className="h-3 w-3 mr-1" />+{product.growth}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pedidos recientes */}
          <Card className="mt-8 bg-gray-900/30 backdrop-blur-sm border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white">Pedidos Recientes</CardTitle>
                  <CardDescription className="text-gray-400">Últimas transacciones de tu negocio</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="border-gray-700 hover:text-white hover:bg-black">
                  Ver todos
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 font-medium text-gray-400 text-sm">Pedido</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-400 text-sm">Cliente</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-400 text-sm">Importe</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-400 text-sm">Estado</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-400 text-sm">Tiempo</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-400 text-sm"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-800 hover:bg-gray-800/20 transition-colors ${
                          dashboardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                        style={{
                          transitionDelay: dashboardVisible ? `${index * 100}ms` : "0ms",
                          transitionDuration: "500ms",
                        }}
                      >
                        <td className="py-3 px-4 font-medium text-white text-sm">{order.id}</td>
                        <td className="py-3 px-4 text-gray-400 text-sm">{order.customer}</td>
                        <td className="py-3 px-4 font-semibold text-white text-sm">{order.amount}</td>
                        <td className="py-3 px-4">
                          <Badge
                            className={
                              order.status === "Completado"
                                ? "bg-green-900/20 text-green-400 border-green-800"
                                : order.status === "Pendiente"
                                  ? "bg-yellow-900/20 text-yellow-400 border-yellow-800"
                                  : "bg-red-900/20 text-red-400 border-red-800"
                            }
                          >
                            {order.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-gray-400 text-sm">hace {order.time}</td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-white">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-[#e60023]/20 to-purple-600/20 rounded-3xl p-8 border border-[#e60023]/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">¿Te gusta lo que ves?</h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Este es solo un ejemplo de lo que podemos crear para tu negocio. Dashboards personalizados, métricas en
                tiempo real y control total.
              </p>
              <Button
                size="lg"
                className="bg-[#e60023] hover:bg-[#c5001e] text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#e60023]/25"
              >
                Solicita tu dashboard personalizado
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
