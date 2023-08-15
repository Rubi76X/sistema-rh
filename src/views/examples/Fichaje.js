import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
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
          {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
              <h3 className="mb-0 text-xl">Fichaje</h3>
                <div className="d-flex mt-4 justify-content-between lign-items-center">
                        <div className="d-flex">
                        <div className="ausencias-days mr-3">
                            <h5 className="mb-0">Horas totales</h5>
                            <p className="text-lg">12:00</p>
                        </div>
                        <div className="ausencias-days mr-3">
                            <h5 className="mb-0">Horas mes</h5>
                            <p className="text-lg">01:00</p>
                        </div>
                        <div className="ausencias-days mr-3">
                            <h5 className="mb-0">Horas semana</h5>
                            <p className="text-lg">00:00</p>
                        </div>
                        <div className="ausencias-days">
                            <h5 className="mb-0">Horas día</h5>
                            <p className="text-lg">00:00</p>
                        </div>
                        </div>
                        <div>
                            <Button color="primary" disabled size="sm" type="button">
                                Solicitar fichaje
                            </Button>
                        </div>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Horas</th>
                    <th scope="col" className="text-center">08:00</th>
                    <th scope="col" className="text-center">09:00</th>
                    <th scope="col" className="text-center">10:00</th>
                    <th scope="col" className="text-center">11:00</th>
                    <th scope="col" className="text-center">12:00</th>
                    <th scope="col" className="text-center">13:00</th>
                    <th scope="col" className="text-center">14:00</th>
                    <th scope="col" className="text-center">15:00</th>
                    <th scope="col" className="text-center">16:00</th>
                    <th scope="col" className="text-center">17:00</th>
                    <th scope="col">Info</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media className="flex-column">
                          <h4 className="mb-0 text-sm">
                            Lunes 13
                          </h4>
                          <p className="mb-0 text-sm text-xs">
                            Junio 2023
                          </p>
                        </Media>
                      </Media>
                    </th>
                    <td>
                        12:00hrs
                    </td>
                    <td className="text-center">
                        <Badge color="" className="badge-dot">
                          <i className="bg-success mr-0" />
                        </Badge>
                    </td>
                    <td className="text-center">
                        <Badge color="" className="badge-dot">
                          <i className="bg-success mr-0" />
                        </Badge>
                    </td>
                    <td className="text-center">
                        <Badge color="" className="badge-dot">
                          <i className="bg-success mr-0" />
                        </Badge>
                    </td>
                    <td className="text-center">
                        <Badge color="" className="badge-dot">
                          <i className="bg-success mr-0" />
                        </Badge>
                    </td>
                    <td className="text-center">
                        <Badge color="" className="badge-dot">
                          <i className="bg-success mr-0" />
                        </Badge>
                    </td>
                    <td className="text-center">
                        <Badge color="" className="badge-dot">
                          <i className="bg-success mr-0" />
                        </Badge>
                    </td>
                    <td className="text-center">
                        <Badge color="" className="badge-dot">
                          <i className="bg-success mr-0" />
                        </Badge>
                    </td>
                    <td className="text-center">
                        <Badge color="" className="badge-dot">
                          <i className="bg-success mr-0" />
                        </Badge>
                    </td>
                    <td className="text-center">
                        <Badge color="" className="badge-dot">
                          <i className="bg-success mr-0" />
                        </Badge>
                    </td>
                    <td className="text-center">
                        <Badge color="" className="badge-dot">
                          <i className="bg-success mr-0" />
                        </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  
                </tbody>
              </Table>
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
