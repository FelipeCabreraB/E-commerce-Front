import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminMenu from "../../components/Admin/AdminMenu";
import { Bar, Line, Pie } from "react-chartjs-2";

function AdminPage() {
  return (
    <div className="admin-page">
      <Container className="py-3  ">
        <Row>
          {/* Menu */}
          <Col xs={12} md={2}>
            <div className="sticky-top">
              <AdminMenu />
            </div>
          </Col>
          {/* Tables */}
          <Col xs={12} md={10}>
            <div className="d-flex justify-content-between py-1">
              <h3 className="">Admin Dashboard </h3>
              <div className="">
                <i class="fas fa-users fa-2x"></i>
              </div>
            </div>
            <Row>
              <Col md={6}>
                <div>
                  <Bar
                    data={{
                      labels: [
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                      ],
                      datasets: [
                        {
                          label: "# of Sales",
                          data: [420, 308, 519, 582, 610, 615],
                          backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                          ],
                          borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                          ],
                          borderWidth: 1,
                        },
                        {
                          label: "# of Orders ",
                          data: [189, 201, 309, 353, 320, 432],
                          backgroundColor: "orange",
                          borderColor: "red",
                        },
                      ],
                    }}
                    height={400}
                    width={600}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        yaxes: [
                          {
                            ticks: {
                              beginAtZero: true,
                            },
                          },
                        ],
                      },
                    }}
                  />
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <Pie
                    data={{
                      labels: [
                        "Timbo",
                        "Nauyaca",
                        "Women",
                        "Sabanera",
                        "Boa",
                        "Mamba Negra",
                      ],
                      datasets: [
                        {
                          label: "Site traffic",
                          data: [420, 308, 519, 582, 610, 615],
                          backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                          ],
                          borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                          ],
                          borderWidth: 1,
                        },
                      ],
                    }}
                    height={400}
                    width={600}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        yaxes: [
                          {
                            ticks: {
                              beginAtZero: true,
                            },
                          },
                        ],
                      },
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <div className="my-5">
                <Line
                  data={{
                    labels: [
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                    ],
                    datasets: [
                      {
                        label: "Site traffic",
                        data: [420, 308, 519, 582, 610, 615],
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                      {
                        label: "# of Registered user ",
                        data: [189, 201, 309, 353, 320, 432],
                        backgroundColor: "orange",
                        borderColor: "yellow",
                      },
                    ],
                  }}
                  height={400}
                  width={600}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      yaxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminPage;
