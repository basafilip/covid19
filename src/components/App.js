import React, { Component, Fragment } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Map from './Map';
import Map2 from './Map2';
import './App.css'
import Carousel from 'react-bootstrap/Carousel'
import UkupnoHr from './ZarazeniHr/UkupnoHr';
import OporavljeniHr from './ZarazeniHr/OporavljeniHr';
import UmrliHr from './ZarazeniHr/UmrliHr';
import ZarazeniDanasHr from './ZarazeniHr/ZarazeniDanasHr';
import OporavljeniSv from './ZarazeniSv/OporavljeniSv';
import ZarazeniSv from './ZarazeniSv/ZarazeniSv';
import ZarazeniDanasSv from './ZarazeniSv/ZarazeniDanasSv';
import UmrliSv from './ZarazeniSv/UmrliSv';
import Update from './update';

am4core.useTheme(am4themes_animated);

class App extends Component {

    render() {
        
        return (

            <Fragment>
                <section id="topbar" className="pb-3">
                    <div className="container-fluid d-flex align-items-center justify-content-center justify-content-lg-end bg-secondary">
                        <p className="text-white mb-0">Azurirano: <Update /></p>
                    </div>
                </section>
                <Carousel controls={false}>
                    <Carousel.Item>
                        <div className="container-fluid">
                            <h3 className="h4 text-white">Hrvatska</h3>
                            <div className="row">
                                <div className="col-6 col-lg-3 mb-30 mb-lg-0">
                                    <div className="co-card d-flex align-items-center justify-content-around bt-success">
                                        <i className="fas fa-walking icon"></i>
                                        <div>
                                            <span className="bold">Ukupno oporavljenih:</span>
                                            <div className="d-flex align-items-baseline justify-content-between">
                                                <span id="recovered" className="badge badge-success"><OporavljeniHr /></span>
                                                <span id="percRecoveredHrv" className="text-white"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3 mb-30 mb-lg-0">
                                    <div className="co-card d-flex align-items-center justify-content-around bt-orange">
                                        <i className="fas fa-procedures icon"></i>
                                        <div>
                                            <span className="bold">Ukupno zarazenih:</span>
                                            <div className="d-flex align-items-baseline justify-content-between">
                                                <span id="cases" className="badge badge-orange"><UkupnoHr /></span>
                                                <span id="percCasesHrv" className="text-white"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="co-card d-flex align-items-center justify-content-around bt-danger">
                                        <i className="fas fa-bed icon"></i>
                                        <div>
                                            <span className="bold">Ukupno umrlih:</span>
                                            <div className="d-flex align-items-baseline justify-content-between">
                                                <span id="deaths" className="badge badge-danger"><UmrliHr /></span>
                                                <span id="percDeathsHrv" className="text-white"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="co-card d-flex align-items-center justify-content-around bt-warning">
                                        <i className="fas fa-calendar-day icon"></i>
                                        <div>
                                            <span className="bold">Broj zarazenih danas:</span>
                                            <span id="todayCasesWorld" className="badge badge-warning"><ZarazeniDanasHr /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="container-fluid">
                            <h3 className="h4 text-white">Svijet</h3>
                            <div className="row">
                                <div className="col-6 col-lg-3 mb-30 mb-lg-0">
                                    <div className="co-card d-flex align-items-center justify-content-around bt-success">
                                        <i className="fas fa-walking icon"></i>
                                        <div>
                                            <span className="bold">Ukupno oporavljenih:</span>
                                            <div className="d-flex align-items-baseline justify-content-between">
                                                <span id="recovered" className="badge badge-success"><OporavljeniSv /></span>
                                                <span id="percRecoveredHrv" className="text-white"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3 mb-30 mb-lg-0">
                                    <div className="co-card d-flex align-items-center justify-content-around bt-orange">
                                        <i className="fas fa-procedures icon"></i>
                                        <div>
                                            <span className="bold">Ukupno zarazenih:</span>
                                            <div className="d-flex align-items-baseline justify-content-between">
                                                <span id="cases" className="badge badge-orange"><ZarazeniSv /></span>
                                                <span id="percCasesHrv" className="text-white"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="co-card d-flex align-items-center justify-content-around bt-danger">
                                        <i className="fas fa-bed icon"></i>
                                        <div>
                                            <span className="bold">Ukupno umrlih:</span>
                                            <div className="d-flex align-items-baseline justify-content-between">
                                                <span id="deaths" className="badge badge-danger"><UmrliSv /></span>
                                                <span id="percDeathsHrv" className="text-white"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="co-card d-flex align-items-center justify-content-around bt-warning">
                                        <i className="fas fa-calendar-day icon"></i>
                                        <div>
                                            <span className="bold">Broj zarazenih danas:</span>
                                            <span id="todayCasesWorld" className="badge badge-warning"><ZarazeniDanasSv /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

                <section id="interaktivna-karta" className="py-3">
                    <div className="container-fluid">
                        <div className="co-card">
                            <h3 className="h4 text-white">Interaktivna karta</h3>
                            <Map />
                        </div>
                    </div>
                </section>

                <section className="py-3">
                    <div className="container-fluid">
                        <div className="co-card">
                            <h3 className="h4 text-white">Top 5 zarazenih drzava</h3>
                            <Map2 paddingRight={20} />
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    };
};

export default App;
