import Chance from 'chance'
import { isValid } from './validations'
import {
  VALUE_DEFAULT_STRING_LENGTH,
  VALUE_DEFAULT_HASH_LENGTH,
  VALUE_DEFAULT_SAMPLE_OPTIONS,
} from './constants'

let chanceInstance = new Chance()

export const resetSeed = (seed) => {
  chanceInstance = isValid(seed)
    ? new Chance(seed)
    : new Chance()
}

export const randomByte = ({chance = chanceInstance}) => {
  return chance.natural({max: 255}).toString()
}

export const randomShort = ({chance = chanceInstance}) => {
  return chance.natural({max: 65535}).toString()
}

export const randomInt = ({chance = chanceInstance}) => {
  return chance.natural({max: 4294967295}).toString()
}

export const randomLong = ({chance = chanceInstance}) => {
  return chance.natural().toString()
}

export const randomIntCustomRange = ({chance = chanceInstance, inputValue}) => {
  const rangeLimits = inputValue.split('-')

  return chance.natural({min: +rangeLimits[0], max: +rangeLimits[1]}).toString()
}

export const randomGuid = ({chance = chanceInstance}) => {
  return chance.guid()
}

export const randomString = ({chance = chanceInstance, inputValue = VALUE_DEFAULT_STRING_LENGTH}) => {
  return chance.word({length: inputValue})
}

export const randomHash = ({chance = chanceInstance, inputValue = VALUE_DEFAULT_HASH_LENGTH}) => {
  const hash = chance.string({
    pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    length: inputValue
  });
  return `#${hash}`
};

export const randomSample = ({chance = chanceInstance, inputValue = VALUE_DEFAULT_SAMPLE_OPTIONS}) => {
  const sampleSet = inputValue.split(',')
  return sampleSet[chance.natural({ max: sampleSet.length - 1 })]
}

export const randomName = ({chance = chanceInstance}) => {
  return chance.name()
}

export const randomStreetAddress = ({chance = chanceInstance}) => {
  return chance.address()
}

export const randomCity = ({chance = chanceInstance}) => {
  return chance.city()
}

export const randomCountryCode = ({chance = chanceInstance}) => {
  return chance.country()
}

export const randomCountryName = ({chance = chanceInstance}) => {
  return chance.country({ full: true })
}

export const randomPhoneNumber = ({chance = chanceInstance}) => {
  return chance.phone()
}

export const randomEmail = ({chance = chanceInstance}) => {
  return chance.email()
}

export const randomIP = ({chance = chanceInstance}) => {
  return chance.ip()
}

export const randomIPv6 = ({chance = chanceInstance}) => {
  return chance.ipv6()
}

export const randomUrl = ({chance = chanceInstance}) => {
  return chance.url()
}

export const randomHexColor = ({chance = chanceInstance}) => {
  return chance.color({format: 'hex', casing: 'upper'})
}

export const randomRgbColor = ({chance = chanceInstance}) => {
  return chance.color({format: 'rgb'})
}
