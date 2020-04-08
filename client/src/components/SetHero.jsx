import React, { useState } from "react";

import heroMock from "../utils/heroMock";

const Input = ({ name, value, changeValue, type = "number" }) => {
  return (
    <input
      min="0"
      onChange={(e) => changeValue(e)}
      type={type}
      name={name}
      value={value}
    ></input>
  );
};

const blankHero = {
  name: "Neuer Held",
  ap: {
    current: 0,
    spend: 0,
    total: 0,
  },
  attributes: {
    mu: 0,
    kl: 0,
    in: 0,
    ch: 0,
    ff: 0,
    ge: 0,
    ko: 0,
    kk: 0,
  },
  talents: {
    koerpertalente: {
      fliegen: 0,
      gaukelei: 0,
      klettern: 0,
      koerperbeherrschung: 0,
      kraftakt: 0,
      reiten: 0,
      schwimmen: 0,
      selbstbeherrschung: 0,
      singen: 0,
      sinnesschaerfe: 0,
      tanzen: 0,
      taschendiebstahl: 0,
      verbergen: 0,
      zechen: 0,
    },
    gesellschaftstalente: {
      bekehren_und_ueberzeugen: 0,
      betoeren: 0,
      einschuechtern: 0,
      etikette: 0,
      gassenwissen: 0,
      menschenkenntniss: 0,
      ueberreden: 0,
      verkleiden: 0,
      willenskraft: 0,
    },
    naturtalente: {
      faehrtensuchen: 0,
      fesseln: 0,
      fischen_und_angeln: 0,
      orientierung: 0,
      pflanzenkunde: 0,
      tierkunde: 0,
      wildnisleben: 0,
    },
    wissenstalente: {
      brett_und_gluecksspiel: 0,
      geographie: 0,
      geschichtswissen: 0,
      goetter_und_kulte: 0,
      kriegskunst: 0,
      magiekunde: 0,
      mechanik: 0,
      rechnen: 0,
      rechtskunde: 0,
      sagen_und_legenden: 0,
      sphaerenkunde: 0,
      sternkunde: 0,
    },
    handwerkstalente: {
      alchimie: 0,
      boote_und_schiffe: 0,
      fahrzeuge: 0,
      handel: 0,
      heilkunde_gift: 0,
      heilkunde_krankheiten: 0,
      heilkunde_seele: 0,
      heilkunde_wunden: 0,
      holzbearbeitung: 0,
      lebensmittelbearbeitung: 0,
      lederbearbeitung: 0,
      malen_und_zeichnen: 0,
      metallbearbeitung: 0,
      musizieren: 0,
      schloesserknacken: 0,
      steinbearbeitung: 0,
      stoffbearbeitung: 0,
    },
  },
  LeP: {
    max: 1,
  },
  AsP: {
    max: 0,
  },
  KaP: {
    max: 0,
  },
  seelenkraft: 0,
  zaehigkeit: 0,
  ausweichen: 0,
  initiative: 0,
  geschwindigkeit: 0,
  schips: {
    max: 3,
  },
  money: 0,
};

/**
 *
 * @param {string} hero hero that is about to change
 */
const SetHero = ({ givenHero = blankHero, submitHero }) => {
  const [hero, setHero] = useState({ ...givenHero });

  //TODO: set id based on existing ones in DB
  const createID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const submit = (e) => {
    e.preventDefault();

    let heroWithID = { ...hero, id: createID() };

    // set current LeP
    if (!hero.LeP.current || hero.LeP.current > hero.LeP.max) {
      heroWithID = { ...hero, LeP: { ...hero.LeP, current: hero.LeP.max } };
    }

    // set current AsP
    if (!hero.AsP.current || hero.AsP.current > hero.AsP.max) {
      heroWithID = {
        ...heroWithID,
        AsP: { ...hero.AsP, current: hero.AsP.max },
      };
    }

    // set current KaP
    if (!hero.KaP.current || hero.KaP.current > hero.KaP.max) {
      heroWithID = {
        ...heroWithID,
        KaP: { ...hero.KaP, current: hero.KaP.max },
      };
    }

    // set current schips
    if (!hero.schips.current || hero.schips.current > hero.schips.max) {
      heroWithID = {
        ...heroWithID,
        schips: { ...hero.schips, current: hero.schips.max },
      };
    }

    submitHero(heroWithID);
  };

  return (
    <div className="SetHero">
      <div>
        <h3> {hero ? hero.name : "Neuer Held"}</h3>
        <form onSubmit={(e) => submit(e)}>
          <div className="heroName">
            <label>
              Name:
              <Input
                name="name"
                value={hero.name}
                changeValue={(e) => setHero({ ...hero, name: e.target.value })}
                type={"text"}
              ></Input>
            </label>
          </div>

          <div className="AP">
            <div className="heading">Abenteuerpunkte (AP)</div>
            <div>
              {Object.keys(heroMock.ap).map((key) => {
                const changeValue = (e) => {
                  setHero({
                    ...hero,
                    ap: { ...hero.ap, [key]: parseInt(e.target.value) },
                  });
                };

                return (
                  <label key={key}>
                    {heroMock.ap[key]}
                    <Input
                      name={key}
                      value={hero.ap[key]}
                      changeValue={changeValue}
                    ></Input>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="attributes">
            {Object.keys(heroMock.attributes).map((key) => {
              const changeValue = (e) => {
                setHero({
                  ...hero,
                  attributes: {
                    ...hero.attributes,
                    [key]: parseInt(e.target.value),
                  },
                });
              };

              return (
                <label key={key}>
                  {heroMock.attributes[key]}
                  <Input
                    name={key}
                    value={hero.attributes[key]}
                    changeValue={changeValue}
                  ></Input>
                </label>
              );
            })}
          </div>

          <div className="energy">
            <div className="LeP">
              <label>
                LeP:
                <Input
                  name="LeP"
                  value={hero.LeP.max}
                  changeValue={(e) =>
                    setHero({
                      ...hero,
                      LeP: { ...hero.LeP, max: parseInt(e.target.value) },
                    })
                  }
                ></Input>
              </label>
            </div>
            <div className="AsP">
              <label>
                AsP:
                <Input
                  name="AsP"
                  value={hero.AsP.max}
                  changeValue={(e) =>
                    setHero({
                      ...hero,
                      AsP: { ...hero.AsP, max: parseInt(e.target.value) },
                    })
                  }
                ></Input>
              </label>
            </div>
            <div className="KaP">
              <label>
                KaP:
                <Input
                  name="KaP"
                  value={hero.KaP.max}
                  changeValue={(e) =>
                    setHero({
                      ...hero,
                      KaP: { ...hero.KaP, max: parseInt(e.target.value) },
                    })
                  }
                ></Input>
              </label>
            </div>
          </div>

          <div className="schips">
            <label>
              Schicksalsmarker:
              <Input
                name="schips"
                value={hero.schips.max}
                changeValue={(e) =>
                  setHero({
                    ...hero,
                    schips: { max: parseInt(e.target.value) },
                  })
                }
              ></Input>
            </label>
          </div>

          <div className="additionalValues">
            <div className="seelenkraft">
              <label>
                Seelenkraft:
                <Input
                  name="seelenkraft"
                  value={hero.seelenkraft}
                  changeValue={(e) =>
                    setHero({ ...hero, seelenkraft: parseInt(e.target.value) })
                  }
                ></Input>
              </label>
            </div>

            <div className="zaehigkeit">
              <label>
                Zähigkeit:
                <Input
                  name="zaehigkeit"
                  value={hero.zaehigkeit}
                  changeValue={(e) =>
                    setHero({ ...hero, zaehigkeit: parseInt(e.target.value) })
                  }
                ></Input>
              </label>
            </div>

            <div className="ausweichen">
              <label>
                Ausweichen:
                <Input
                  name="ausweichen"
                  value={hero.ausweichen}
                  changeValue={(e) =>
                    setHero({ ...hero, ausweichen: parseInt(e.target.value) })
                  }
                ></Input>
              </label>
            </div>

            <div className="initiative">
              <label>
                Initiative:
                <Input
                  name="initiative"
                  value={hero.initiative}
                  changeValue={(e) =>
                    setHero({ ...hero, initiative: parseInt(e.target.value) })
                  }
                ></Input>
              </label>
            </div>

            <div className="geschwindigkeit">
              <label>
                Geschwindigkeit:
                <Input
                  name="geschwindigkeit"
                  value={hero.geschwindigkeit}
                  changeValue={(e) =>
                    setHero({
                      ...hero,
                      geschwindigkeit: parseInt(e.target.value),
                    })
                  }
                ></Input>
              </label>
            </div>
          </div>

          <div className="talente">
            <div>Talente</div>
            <div className="koerpertalente">
              <div className="heading">Körpertalente</div>
              <div>
                {Object.keys(heroMock.talents.koerpertalente).map((key) => {
                  const changeValue = (e) => {
                    setHero({
                      ...hero,
                      talents: {
                        ...hero.talents,
                        koerpertalente: {
                          ...hero.talents.koerpertalente,
                          [key]: parseInt(e.target.value),
                        },
                      },
                    });
                  };

                  return (
                    <label key={key}>
                      {heroMock.talents.koerpertalente[key]}
                      <Input
                        name={key}
                        value={hero.talents.koerpertalente[key]}
                        changeValue={changeValue}
                      ></Input>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="gesellschaftstalente">
              <div className="heading">Gesellschaftstalente</div>
              <div>
                {Object.keys(heroMock.talents.gesellschaftstalente).map(
                  (key) => {
                    const changeValue = (e) => {
                      setHero({
                        ...hero,
                        talents: {
                          ...hero.talents,
                          gesellschaftstalente: {
                            ...hero.talents.gesellschaftstalente,
                            [key]: parseInt(e.target.value),
                          },
                        },
                      });
                    };

                    return (
                      <label key={key}>
                        {heroMock.talents.gesellschaftstalente[key]}
                        <Input
                          name={key}
                          value={hero.talents.gesellschaftstalente[key]}
                          changeValue={changeValue}
                        ></Input>
                      </label>
                    );
                  }
                )}
              </div>
            </div>

            <div className="naturtalente">
              <div className="heading">Naturtalente</div>
              <div>
                {Object.keys(heroMock.talents.naturtalente).map((key) => {
                  const changeValue = (e) => {
                    setHero({
                      ...hero,
                      talents: {
                        ...hero.talents,
                        naturtalente: {
                          ...hero.talents.naturtalente,
                          [key]: parseInt(e.target.value),
                        },
                      },
                    });
                  };

                  return (
                    <label key={key}>
                      {heroMock.talents.naturtalente[key]}
                      <Input
                        name={key}
                        value={hero.talents.naturtalente[key]}
                        changeValue={changeValue}
                      ></Input>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="wissenstalente">
              <div className="heading">Wissenstalente</div>
              <div>
                {Object.keys(heroMock.talents.wissenstalente).map((key) => {
                  const changeValue = (e) => {
                    setHero({
                      ...hero,
                      talents: {
                        ...hero.talents,
                        wissenstalente: {
                          ...hero.talents.wissenstalente,
                          [key]: parseInt(e.target.value),
                        },
                      },
                    });
                  };

                  return (
                    <label key={key}>
                      {heroMock.talents.wissenstalente[key]}
                      <Input
                        name={key}
                        value={hero.talents.wissenstalente[key]}
                        changeValue={changeValue}
                      ></Input>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="handwerkstalente">
              <div className="heading">Handwerkstalente</div>
              <div>
                {Object.keys(heroMock.talents.handwerkstalente).map((key) => {
                  const changeValue = (e) => {
                    setHero({
                      ...hero,
                      talents: {
                        ...hero.talents,
                        handwerkstalente: {
                          ...hero.talents.handwerkstalente,
                          [key]: parseInt(e.target.value),
                        },
                      },
                    });
                  };

                  return (
                    <label key={key}>
                      {heroMock.talents.handwerkstalente[key]}
                      <Input
                        name={key}
                        value={hero.talents.handwerkstalente[key]}
                        changeValue={changeValue}
                      ></Input>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
          <input type="submit" value="Speichern" />
        </form>
      </div>
    </div>
  );
};

export default SetHero;
