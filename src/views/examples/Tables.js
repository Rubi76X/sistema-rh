import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Tables = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        
        {/* Ausencias y retardos */}
        <Row>
          <div className="col mt-5">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0 text-xl">Ausencias y Retardos</h3>
                <div className="d-flex mt-4 justify-content-between lign-items-center">
                        <div className="d-flex">
                        <div className="ausencias-days mr-3">
                            <h5 className="mb-0">Días laborados</h5>
                            <p className="text-lg">122</p>
                        </div>
                        <div className="ausencias-days mr-3">
                            <h5 className="mb-0">Ausencias</h5>
                            <p className="text-lg">0</p>
                        </div>
                        <div className="ausencias-days mr-3">
                            <h5 className="mb-0">Retardos</h5>
                            <p className="text-lg">0</p>
                        </div>
                        <div className="ausencias-days">
                            <h5 className="mb-0">Sin justificar</h5>
                            <p className="text-lg">0</p>
                        </div>
                        </div>
                        <div>
                            <Button color="secondary" disabled size="sm" type="button">
                                Sincronizar
                            </Button>
                            <Button color="primary" disabled size="sm" type="button">
                                Solicitar ausencia
                            </Button>
                        </div>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush " responsive>
                <tbody >
                  <tr >
                    <td className="p-0 pl-2 ">
                      
                        <div className="flex-column calendar-items">
                          <div className="bg-dark text-center container-mes">
                          <h4 className="mb-0 text-white text-bold p-2">
                              JUNIO 2023
                          </h4>
                          </div>
                          <div className="text-light text-center container-days">
                          <span className="mb-0 text-sm text-bold">L</span>
                          <span className="mb-0 text-sm">M</span>
                          <span className="mb-0 text-sm">X</span>
                          <span className="mb-0 text-sm">J</span>
                          <span className="mb-0 text-sm">V</span>
                          <span className="mb-0 text-sm">S</span>
                          <span className="mb-0 text-sm">D</span>
                          </div>
                          <p className="mb-0 text-xs container-week">
                              <div className=" text-center container-days">
                                  <span className="mb-0 text-sm">1</span>
                                  <span className="mb-0 text-sm">2</span>
                                  <span className="mb-0 text-sm">3</span>
                                  <span className="mb-0 text-sm">4</span>
                                  <span className="mb-0 text-sm">5</span>
                                  <span className="mb-0 text-sm">6</span>
                                  <span className="mb-0 text-sm">7</span>
                              </div>
                              <div className=" text-center container-days">
                                  <span className="mb-0 text-sm">8</span>
                                  <span className="mb-0 text-sm">9</span>
                                  <span className="mb-0 text-sm">10</span>
                                  <span className="mb-0 text-sm">11</span>
                                  <span className="mb-0 text-sm">12</span>
                                  <span className="mb-0 text-sm">13</span>
                                  <span className="mb-0 text-sm">14</span>
                              </div>
                              <div className=" text-center container-days">
                                  <span className="mb-0 text-sm ">15</span>
                                  <span className="mb-0 text-sm">16</span>
                                  <span className="mb-0 text-sm">17</span>
                                  <span className="mb-0 text-sm">18</span>
                                  <span className="mb-0 text-sm">19</span>
                                  <span className="mb-0 text-sm">20</span>
                                  <span className="mb-0 text-sm">21</span>
                              </div>
                              <div className="text-center container-days">
                                  <span className="mb-0 text-sm">22</span>
                                  <span className="mb-0 text-sm">23</span>
                                  <span className="mb-0 text-sm">24</span>
                                  <span className="mb-0 text-sm">25</span>
                                  <span className="mb-0 text-sm">26</span>
                                  <span className="mb-0 text-sm">27</span>
                                  <span className="mb-0 text-sm">28</span>
                              </div>
                          </p>
                        </div>
                      
                    </td>
                    
                    <td className="p-0 pl-2 ">
                      
                        <div className="flex-column calendar-items">
                          <div className="bg-dark text-center container-mes">
                          <h4 className="mb-0 text-white text-bold p-2">
                              JUNIO 2023
                          </h4>
                          </div>
                          <div className="text-light text-center container-days">
                          <span className="mb-0 text-sm text-bold">L</span>
                          <span className="mb-0 text-sm">M</span>
                          <span className="mb-0 text-sm">X</span>
                          <span className="mb-0 text-sm">J</span>
                          <span className="mb-0 text-sm">V</span>
                          <span className="mb-0 text-sm">S</span>
                          <span className="mb-0 text-sm">D</span>
                          </div>
                          <p className="mb-0 text-xs container-week">
                              <div className=" text-center container-days">
                                  <span className="mb-0 text-sm">1</span>
                                  <span className="mb-0 text-sm">2</span>
                                  <span className="mb-0 text-sm">3</span>
                                  <span className="mb-0 text-sm">4</span>
                                  <span className="mb-0 text-sm">5</span>
                                  <span className="mb-0 text-sm">6</span>
                                  <span className="mb-0 text-sm">7</span>
                              </div>
                              <div className=" text-center container-days">
                                  <span className="mb-0 text-sm">8</span>
                                  <span className="mb-0 text-sm">9</span>
                                  <span className="mb-0 text-sm">10</span>
                                  <span className="mb-0 text-sm">11</span>
                                  <span className="mb-0 text-sm">12</span>
                                  <span className="mb-0 text-sm">13</span>
                                  <span className="mb-0 text-sm">14</span>
                              </div>
                              <div className=" text-center container-days">
                                  <span className="mb-0 text-sm ">15</span>
                                  <span className="mb-0 text-sm">16</span>
                                  <span className="mb-0 text-sm">17</span>
                                  <span className="mb-0 text-sm">18</span>
                                  <span className="mb-0 text-sm">19</span>
                                  <span className="mb-0 text-sm">20</span>
                                  <span className="mb-0 text-sm">21</span>
                              </div>
                              <div className="text-center container-days">
                                  <span className="mb-0 text-sm">22</span>
                                  <span className="mb-0 text-sm">23</span>
                                  <span className="mb-0 text-sm">24</span>
                                  <span className="mb-0 text-sm">25</span>
                                  <span className="mb-0 text-sm">26</span>
                                  <span className="mb-0 text-sm">27</span>
                                  <span className="mb-0 text-sm">28</span>
                              </div>
                          </p>
                        </div>
                      
                    </td>

                    <td className="p-0 pl-2 ">
                      
                        <div className="flex-column calendar-items">
                          <div className="bg-dark text-center container-mes">
                          <h4 className="mb-0 text-white text-bold p-2">
                              JUNIO 2023
                          </h4>
                          </div>
                          <div className="text-light text-center container-days text-bold">
                          <span className="mb-0 text-sm ">L</span>
                          <span className="mb-0 text-sm">M</span>
                          <span className="mb-0 text-sm">X</span>
                          <span className="mb-0 text-sm">J</span>
                          <span className="mb-0 text-sm">V</span>
                          <span className="mb-0 text-sm">S</span>
                          <span className="mb-0 text-sm">D</span>
                          </div>
                          <p className="mb-0 text-xs container-week">
                              <div className=" text-center text-dark container-days">
                                  <span className="mb-0 text-sm">1</span>
                                  <span className="mb-0 text-sm">2</span>
                                  <span className="mb-0 text-sm">3</span>
                                  <span className="mb-0 text-sm">4</span>
                                  <span className="mb-0 text-sm">5</span>
                                  <span className="mb-0 text-sm">6</span>
                                  <span className="mb-0 text-sm">7</span>
                              </div>
                              <div className=" text-center container-days">
                                  <span className="mb-0 text-sm">8</span>
                                  <span className="mb-0 text-sm">9</span>
                                  <span className="mb-0 text-sm">10</span>
                                  <span className="mb-0 text-sm">11</span>
                                  <span className="mb-0 text-sm">12</span>
                                  <span className="mb-0 text-sm">13</span>
                                  <span className="mb-0 text-sm">14</span>
                              </div>
                              <div className=" text-center container-days">
                                  <span className="mb-0 text-sm ">15</span>
                                  <span className="mb-0 text-sm">16</span>
                                  <span className="mb-0 text-sm">17</span>
                                  <span className="mb-0 text-sm">18</span>
                                  <span className="mb-0 text-sm">19</span>
                                  <span className="mb-0 text-sm">20</span>
                                  <span className="mb-0 text-sm">21</span>
                              </div>
                              <div className="text-center container-days">
                                  <span className="mb-0 text-sm">22</span>
                                  <span className="mb-0 text-sm">23</span>
                                  <span className="mb-0 text-sm">24</span>
                                  <span className="mb-0 text-sm">25</span>
                                  <span className="mb-0 text-sm">26</span>
                                  <span className="mb-0 text-sm">27</span>
                                  <span className="mb-0 text-sm">28</span>
                              </div>
                          </p>
                        </div>
                      
                    </td>

                    <td className="p-0 pr-2 ">
                      
                        <div className="flex-column calendar-items">
                          <div className="bg-dark text-center container-mes">
                          <h4 className="mb-0 text-white text-bold p-2">
                              JUNIO 2023
                          </h4>
                          </div>
                          <div className="text-light text-center container-days">
                          <span className="mb-0 text-sm text-bold">L</span>
                          <span className="mb-0 text-sm">M</span>
                          <span className="mb-0 text-sm">X</span>
                          <span className="mb-0 text-sm">J</span>
                          <span className="mb-0 text-sm">V</span>
                          <span className="mb-0 text-sm">S</span>
                          <span className="mb-0 text-sm">D</span>
                          </div>
                          <p className="mb-0 text-xs container-week">
                              <div className=" text-center container-days">
                                  <span className="mb-0 text-sm">1</span>
                                  <span className="mb-0 text-sm">2</span>
                                  <span className="mb-0 text-sm">3</span>
                                  <span className="mb-0 text-sm">4</span>
                                  <span className="mb-0 text-sm">5</span>
                                  <span className="mb-0 text-sm">6</span>
                                  <span className="mb-0 text-sm">7</span>
                              </div>
                              <div className=" text-center container-days">
                                  <span className="mb-0 text-sm">8</span>
                                  <span className="mb-0 text-sm">9</span>
                                  <span className="mb-0 text-sm">10</span>
                                  <span className="mb-0 text-sm">11</span>
                                  <span className="mb-0 text-sm">12</span>
                                  <span className="mb-0 text-sm">13</span>
                                  <span className="mb-0 text-sm">14</span>
                              </div>
                              <div className=" text-center container-days">
                                  <span className="mb-0 text-sm ">15</span>
                                  <span className="mb-0 text-sm">16</span>
                                  <span className="mb-0 text-sm">17</span>
                                  <span className="mb-0 text-sm">18</span>
                                  <span className="mb-0 text-sm">19</span>
                                  <span className="mb-0 text-sm">20</span>
                                  <span className="mb-0 text-sm">21</span>
                              </div>
                              <div className="text-center container-days">
                                  <span className="mb-0 text-sm">22</span>
                                  <span className="mb-0 text-sm">23</span>
                                  <span className="mb-0 text-sm">24</span>
                                  <span className="mb-0 text-sm">25</span>
                                  <span className="mb-0 text-sm">26</span>
                                  <span className="mb-0 text-sm">27</span>
                                  <span className="mb-0 text-sm">28</span>
                              </div>
                          </p>
                        </div>
                      
                    </td>
                    
                  </tr>
                  
                </tbody>
              </Table>
              <div className="ml-4 mt-5">
                  <h4 className="text-lg">Historial de ausencias</h4>
              </div>
              <div className="container-vacaciones-nota">
                  <h4>No hay retardos o ausencias</h4>
                  <p>Cuando tengas retardos o ausencias podrás ver aquí toda la información.</p>
              </div>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      
      </Container>
    </>
  );
};

export default Tables;
