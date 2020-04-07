import React, { useState } from "react";

import heroMock from "../utils/heroMock";
import { withRouter, useHistory } from "react-router-dom";

const Input = ({ name, value, changeValue, type = "number" }) => {
  return (
    <input
      onChange={(e) => changeValue(e)}
      type={type}
      name={name}
      value={value}
    ></input>
  );
};

/**
 *
 * @param {string} hero hero that is about to change
 */
const SetHero = ({ givenHero = {}, submitHero }) => {
  let history = useHistory();

  const [hero, setHero] = useState({ ...givenHero });

  //TODO: set id based on existing ones in DB
  const createID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const submit = (e) => {
    e.preventDefault();
    const heroWithID = { ...hero, id: createID() };
    submitHero(heroWithID);
    history.push("/");
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

export default withRouter(SetHero);
