import { IParsedDomain } from "../types/parsedDomain.interface"

// Util to map the response to a domain object
export const domainMapper = (rawResponse: string): IParsedDomain => {
   //clean the payload
  let cleanResponse = rawResponse.split('\r\n')
  
  // Map the response to a domain object
  let domain = cleanResponse[0].split(/:/).map(element => element.trim())[1]
  let registrarId = cleanResponse[1].split(/:/).map(element => element.trim())[1]
  let registrarWhoisServer = cleanResponse[2].split(/:/).map(element => element.trim())[1]
  //TODO: refine logic let registrarUrl = cleanResponse[3].split(/:/).map(element => element.trim())[1]

  let creationDate = cleanResponse[5].split(/:/).map(element => element.trim())[1]
  let expirationDate = cleanResponse[6].split(/:/).map(element => element.trim())[1]
  let registrarName = cleanResponse[7].split(/:/).map(element => element.trim())[1]
  let registrarIanaId = cleanResponse[8].split(/:/).map(element => element.trim())[1]

  let parsedDomain = {
    domain,
    registrarId,
    registrarName,
    registrarWhoisServer,
    expirationDate,
    creationDate,
    registrarIanaId,
    rawResponse,
  }
  
  return parsedDomain
}
