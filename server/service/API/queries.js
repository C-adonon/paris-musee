// queries.js
export const getPainting = (query) => `
{
  nodeQuery(
    filter: {conditions: [{field: "uuid", value: "${query}"}]}
  ) {
    entities {
      entityUuid
      ... on NodeOeuvre {
        title
        absolutePath
        fieldLrefAdlib
        fieldUrlAlias
        fieldTitreDeMediation
        fieldSousTitreDeMediation
        fieldOeuvreAuteurs {
          entity {
            fieldAuteurAuteur {
              entity {
                name
                fieldPipDateNaissance {
                 startPrecision
                  startYear
                  startMonth
                  startDay
                  sort
                  endPrecision
                  endYear
                  endMonth
                  endDay
                  processed
                }
                fieldPipLieuNaissance
                fieldPipDateDeces {
                 startPrecision
                  startYear
                  startMonth
                  startDay
                  sort
                  endPrecision
                  endYear
                  endMonth
                  endDay
                  processed
                }
                 fieldLieuDeces
              }
            }
            fieldAuteurFonction {
              entity {
                name
              }
            }
          }
        }
        fieldVisuels {
          entity {
            name
            vignette
            publicUrl
          }
        }
        fieldDateProduction {
          startPrecision
          startYear
          startMonth
          startDay
          sort
          endPrecision
          endYear
          endMonth
          endDay
          century
          processed
        }
        fieldOeuvreSiecle {
           entity {
            name
          }
        }
        fieldOeuvreTypesObjet {
          entity {
            name
            fieldLrefAdlib
            entityUuid
          }
        }
        fieldDenominations {
          entity {
            name
          }
        }
        fieldMateriauxTechnique{
          entity {
            name
          }
        }
        fieldOeuvreDimensions {
          entity {
            fieldDimensionPartie {
              entity {
                name
              }
            }
            fieldDimensionType {
              entity {
                name
              }
            }
            fieldDimensionValeur
            fieldDimensionUnite {
             entity {
                name
              }
            }
          }
        }
        fieldOeuvreInscriptions{
          entity {
            fieldInscriptionType {
              entity {
                name
              }
            }
            fieldInscriptionMarque {
              value
            }
            fieldInscriptionEcriture {
              entity {
                name
              }
            }
          }
        }
        fieldOeuvreDescriptionIcono {
          value
        }
        fieldCommentaireHistorique {
          value

        }
        fieldOeuvreThemeRepresente	 {
          entity {
            name
          }
        }
        fieldLieuxConcernes {
          entity {
            name
          }
        }
        fieldOeuvreNumInventaire
        fieldOeuvreStyleMouvement {
          entity {
            name
          }
        }
        fieldMusee {
          entity {
            name
          }
        }
        fieldOeuvreExpose {
          entity {
            name
          }
        }
        fieldHdVisuel {
          entity {
            fieldMediaImage {
              entity {
                url
              }
            }
          }
        }
      }
    }
  }
}
`;
