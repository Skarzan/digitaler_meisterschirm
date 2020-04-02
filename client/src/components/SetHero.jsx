import React, { useState } from "react";

import heroMock from "../utils/heroMock";

const Input = ({ name, value, changeValue, type = "number" }) => {
  return (
    <input
      onChange={e => changeValue(e)}
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
const SetHero = ({ givenHero = {} }) => {
  const [hero, setHero] = useState({ ...givenHero });
  //TODO: setId

  return (
    <div className="SetHero">
      <div>
        <h3> {hero ? hero.name : "Neuer Held"}</h3>
        <div className="heroName">
          <label>
            Name:
            <Input
              name="name"
              value={hero.name}
              changeValue={e => setHero({ ...hero, name: e.target.value })}
              type={"text"}
            ></Input>
          </label>
        </div>

        <div className="AP">
          <div className="heading">Abenteuerpunkte (AP)</div>
          <div>
            {Object.keys(heroMock.ap).map(key => {
              const changeValue = e => {
                setHero({ ...hero, ap: { ...hero.ap, [key]: e.target.value } });
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
          {Object.keys(heroMock.attributes).map(key => {
            const changeValue = e => {
              setHero({
                ...hero,
                attributes: { ...hero.attributes, [key]: e.target.value }
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
                changeValue={e =>
                  setHero({ ...hero, LeP: { max: e.target.value } })
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
                changeValue={e =>
                  setHero({ ...hero, AsP: { max: e.target.value } })
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
                changeValue={e =>
                  setHero({ ...hero, KaP: { max: e.target.value } })
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
              changeValue={e =>
                setHero({ ...hero, schips: { max: e.target.value } })
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
                changeValue={e =>
                  setHero({ ...hero, seelenkraft: e.target.value })
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
                changeValue={e =>
                  setHero({ ...hero, zaehigkeit: e.target.value })
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
                changeValue={e =>
                  setHero({ ...hero, ausweichen: e.target.value })
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
                changeValue={e =>
                  setHero({ ...hero, initiative: e.target.value })
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
                changeValue={e =>
                  setHero({ ...hero, geschwindigkeit: e.target.value })
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
              {Object.keys(heroMock.talents.koerpertalente).map(key => {
                const changeValue = e => {
                  setHero({
                    ...hero,
                    talents: {
                      ...hero.talents,
                      koerpertalente: {
                        ...hero.talents.koerpertalente,
                        [key]: e.target.value
                      }
                    }
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
              {Object.keys(heroMock.talents.gesellschaftstalente).map(key => {
                const changeValue = e => {
                  setHero({
                    ...hero,
                    talents: {
                      ...hero.talents,
                      gesellschaftstalente: {
                        ...hero.talents.gesellschaftstalente,
                        [key]: e.target.value
                      }
                    }
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
              })}
            </div>
          </div>

          <div className="naturtalente">
            <div className="heading">Naturtalente</div>
            <div>
              {Object.keys(heroMock.talents.naturtalente).map(key => {
                const changeValue = e => {
                  setHero({
                    ...hero,
                    talents: {
                      ...hero.talents,
                      naturtalente: {
                        ...hero.talents.naturtalente,
                        [key]: e.target.value
                      }
                    }
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
              {Object.keys(heroMock.talents.wissenstalente).map(key => {
                const changeValue = e => {
                  setHero({
                    ...hero,
                    talents: {
                      ...hero.talents,
                      wissenstalente: {
                        ...hero.talents.wissenstalente,
                        [key]: e.target.value
                      }
                    }
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
              {Object.keys(heroMock.talents.handwerkstalente).map(key => {
                const changeValue = e => {
                  setHero({
                    ...hero,
                    talents: {
                      ...hero.talents,
                      handwerkstalente: {
                        ...hero.talents.handwerkstalente,
                        [key]: e.target.value
                      }
                    }
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
      </div>
    </div>
  );
};

export default SetHero;
