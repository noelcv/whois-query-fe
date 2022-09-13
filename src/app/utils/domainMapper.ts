import { IParsedDomain } from "../types/parsedDomain.interface"
import { v4 as uuid } from 'uuid';

// Util to map the response to a domain object
  export const domainMapper = (rawResponse: string): IParsedDomain => {
  //generate a unique id for the parsed domain
  const uid = uuid();
  
   //clean the payload
  let cleanResponse = rawResponse.split('\r\n')
  
  // Map the response to a domain object
  let domainName = cleanResponse[0].split(/:/).map(element => element.trim())[1]
  let registrarId = cleanResponse[1].split(/:/).map(element => element.trim())[1]
  let registrarWhoisServer = cleanResponse[2].split(/:/).map(element => element.trim())[1]
  //TODO: refine logic let registrarUrl = cleanResponse[3].split(/:/).map(element => element.trim())[1]
  let creationDate = cleanResponse[5].split(/:/).map(element => element.trim())[1].slice(0,10)
  let expirationDate = cleanResponse[6].split(/:/).map(element => element.trim())[1].slice(0,10)
  let registrarName = cleanResponse[7].split(/:/).map(element => element.trim())[1]
  let registrarIanaId = cleanResponse[8].split(/:/).map(element => element.trim())[1]

  //assemble the domain object
  let parsedDomain = {
    uid,
    domainName,
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
