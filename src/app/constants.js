// ROLE ALIGNMENTS

// TOWN
export const TOWN = 'TOWN';
// Town Investigative
export const TOWN_INVESTIGATIVE = 'TOWN_INVESTIGATIVE';
const INVESTIGATOR = { name: 'Investigator' };
const LOOKOUT = { name: 'Lookout' };
const SHERIFF = { name: 'Sheriff' };
const SPY = { name: 'Spy' };
// Town Killing
export const TOWN_KILLING = 'TOWN_KILLING';
const JAILOR = { name: 'Jailor', unique: true };
const VAMPIRE_HUNTER = { name: 'Vampire Hunter' };
const VETERAN = { name: 'Veteran', unique: true };
const VIGILANTE = { name: 'Vigilante' };
// Town Protective
export const TOWN_PROTECTIVE = 'TOWN_PROTECTIVE';
export const BODYGUARD = { name: 'Bodyguard' };
export const DOCTOR = { name: 'Doctor' };
// Town Support
export const TOWN_SUPPORT = 'TOWN_SUPPORT';
const ESCORT = { name: 'Escort' };
const MAYOR = { name: 'Mayor', unique: true };
const MEDIUM = { name: 'Medium' };
const RETRIBUTIONIST = { name: 'Retributionist', unique: true };
const TRANSPORTER = { name: 'Transporter' };

// MAFIA
export const MAFIA = 'MAFIA';
// Mafia Deception
export const MAFIA_DECEPTION = 'MAFIA_DECEPTION';
const DIGUISER = { name: 'Disguiser' };
const FORGER = { name: 'Forger' };
const FRAMER = { name: 'Framer' };
const JANITOR = { name: 'Janitor' };
// Mafia Killing
export const MAFIA_KILLING = 'MAFIA_KILLING';
const GODFATHER = { name: 'Godfather', unique: true };
const MAFIOSO = { name: 'Mafioso', unique: true };
// Mafia Support
export const MAFIA_SUPPORT = 'MAFIA_SUPPORT';
const BLACKMAILER = { name: 'Blackmailer' };
const CONSIGLIERE = { name: 'Consigliere' };
const CONSORT = { name: 'Consort' };

// NEUTRAL
export const NEUTRAL = 'NEUTRAL';
// Neutral Benign
export const NEUTRAL_BENIGN = 'NEUTRAL_BENIGN';
const AMNESIAC = { name: 'Amnesiac' };
const SURVIVOR = { name: 'Survivor' };
// Neutral Chaos
export const NEUTRAL_CHAOS = 'NEUTRAL_CHAOS';
const VAMPIRE = { name: 'Vampire' };
// Neutral Evil
export const NEUTRAL_EVIL = 'NEUTRAL_EVIL';
const EXECUTIONER = { name: 'Executioner' };
const JESTER = { name: 'Jester' };
const WITCH = { name: 'Witch' };
// Neutral Killing
export const NEUTRAL_KILLING = 'NEUTRAL_KILLING';
const ARSONIST = { name: 'Arsonist' };
const SERIAL_KILLER = { name: 'Serial Killer' };
const WEREWOLF = { name: 'Werewolf' };

export const ROLES = {
  TOWN: {
    TOWN_INVESTIGATIVE: [INVESTIGATOR, LOOKOUT, SHERIFF, SPY],
    TOWN_KILLING: [JAILOR, VAMPIRE_HUNTER, VETERAN, VIGILANTE],
    TOWN_PROTECTIVE: [BODYGUARD, DOCTOR],
    TOWN_SUPPORT: [ESCORT, MAYOR, MEDIUM, RETRIBUTIONIST, TRANSPORTER]
  },
  MAFIA: {
    MAFIA_DECEPTION: [DIGUISER, FORGER, FRAMER, JANITOR],
    MAFIA_KILLING: [GODFATHER, MAFIOSO],
    MAFIA_SUPPORT: [BLACKMAILER, CONSIGLIERE, CONSORT]
  },
  NEUTRAL: {
    NEUTRAL_BENIGN: [AMNESIAC, SURVIVOR],
    NEUTRAL_CHAOS: [VAMPIRE],
    NEUTRAL_EVIL: [EXECUTIONER, JESTER, WITCH],
    NEUTRAL_KILLING: [ARSONIST, SERIAL_KILLER, WEREWOLF]
  }
};

// Certainty
const CLAIMED = 'Claimed';
const INVESTIGATED = 'Investigated';
const CONFIRMED = 'Confimed'
export const CERTAINTY = [CLAIMED, INVESTIGATED, CONFIRMED];


/*  
// ROLE CATEGORIES
export const TOWN = 'TOWN';
export const MAFIA = 'MAFIA';
export const NEUTRAL = 'NEUTRAL';

// ROLE ALIGNMENTS
// Town
export const TOWN_INVESTIGATIVE = 'TOWN_INVESTIGATIVE';
export const TOWN_KILLING = 'TOWN_KILLING';
export const TOWN_PROTECTIVE = 'TOWN_PROTECTIVE';
export const TOWN_SUPPORT = 'TOWN_SUPPORT';
// Mafia
export const MAFIA_DECEPTION = 'MAFIA_DECEPTION';
export const MAFIA_KILLING = 'MAFIA_KILLING';
export const MAFIA_SUPPORT = 'MAFIA_SUPPORT';
// Neutral
export const NEUTRAL_BENIGN = 'NEUTRAL_BENIGN';
export const NEUTRAL_CHAOS = 'NEUTRAL_CHAOS';
export const NEUTRAL_EVIL = 'NEUTRAL_EVIL';
export const NEUTRAL_KILLING = 'NEUTRAL_KILLING';

// ROLE NAMES
// Town Investigative
export const INVESTIGATOR = 'INVESTIGATOR';
export const LOOKOUT = 'LOOKOUT';
export const SHERIFF = 'SHERIFF';
export const SPY = 'SPY';
// Town Killing
export const JAILOR = 'JAILOR';
export const VAMPIRE_HUNTER = 'VAMPIRE_HUNTER';
export const VETERAN = 'VETERAN';
export const VIGILANTE = 'VIGILANTE';
// Town Protective
export const BODYGUARD = 'BODYGUARD';
export const DOCTOR = 'DOCTOR';
// Town Support
export const ESCORT = 'ESCORT';
export const MAYOR = 'MAYOR';
export const MEDIUM = 'MEDIUM';
export const RETRIBUTIONIST = 'RETRIBUTIONIST';
export const TRANSPORTER = 'TRANSPORTER';
// Mafia Deception
export const DISGUISER = 'DISGUISER';
export const FORGER = 'FORGER';
export const FRAMER = 'FRAMER';
export const JANITOR = 'JANITOR';
// Mafia Killing
export const GODFATHER = 'GODFATHER';
export const MAFIOSO = 'MAFIOSO';
// Mafia Support
export const BLACKMAILER = 'BLACKMAILER';
export const CONSIGLIERE = 'CONSIGLIERE';
export const CONSORT = 'CONSORT';
// Neutral Benign
export const AMNESIAC = 'AMNESIAC';
export const SURVIVOR = 'SURVIVOR';
// Neutral Chaos
export const VAMPIRE = 'VAMPIRE';
// Neutral Evil
export const EXECUTIONER = 'EXECUTIONER';
export const JESTER = 'JESTER';
export const WITCH = 'WITCH';
// Neutral Killing
export const ARSONIST = 'ARSONIST';
export const SERIAL_KILLER = 'SERIAL_KILLER';
export const WEREWOLF = 'WEREWOLF'

*/