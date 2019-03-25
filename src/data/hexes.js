const hexes = {
    hex0: {
        id: 0,
        name: '',
        image: '/images/hexagrams/0.png',
        desc: ''
    },
    hex1: {
        id: 1,
        name: "Ch'ien",
        image: '/images/hexagrams/1.png',
        desc: 'Creating'
    },
    hex2: {
        id: 2,
        name: "K'un",
        image: '/images/hexagrams/2.png',
        desc: 'Open, Receptive, Yielding, Willing to Follow'
    },
    hex3: {
        id: 3,
        name: 'Chun',
        image: '/images/hexagrams/3.png',
        desc: 'Difficulty and Danger at the Beginning'
    },
    hex4: {
        id: 4,
        name: 'Mêng',
        image: '/images/hexagrams/4.png',
        desc: 'Inexperience'
    },
    hex5: {
        id: 5,
        name: 'Hsü',
        image: '/images/hexagrams/5.png',
        desc: 'Holding Back in the Face of Danger'
    },
    hex6: {
        id: 6,
        name: 'Sung',
        image: '/images/hexagrams/6.png',
        desc: 'Argument, Dispute, Conflict, Adversaries'
    },
    hex7: {
        id: 7,
        name: 'Shih',
        image: '/images/hexagrams/7.png',
        desc: 'Collective Forces'
    },
    hex8: {
        id: 8,
        name: 'Pi',
        image: '/images/hexagrams/8.png',
        desc: 'Joining, Supporting, Uniting'
    },
    hex9: {
        id: 9,
        name: "Hsiao Ch'u",
        image: '/images/hexagrams/9.png',
        desc: 'Gentle Restraint, Holding Back'
    },
    hex10: {
        id: 10,
        name: 'Lü',
        image: '/images/hexagrams/10.png',
        desc: 'Walking your Path'
    },
    hex11: {
        id: 11,
        name: "T'ai",
        image: '/images/hexagrams/11.png',
        desc: 'Peaceful Prosperity, Harmony, Heaven on Earth'
    },
    hex12: {
        id: 12,
        name: "P'i",
        image: '/images/hexagrams/12.png',
        desc: 'Separation, Decline'
    },
    hex13: {
        id: 13,
        name: "T'ung Jên",
        image: '/images/hexagrams/13.png',
        desc: 'Socializing'
    },
    hex14: {
        id: 14,
        name: 'Ta Yu',
        image: '/images/hexagrams/14.png',
        desc: 'Great Abundance, Great Wealth'
    },
    hex15: {
        id: 15,
        name: "Ch'ien",
        image: '/images/hexagrams/15.png',
        desc: 'Modesty, Humbleness, Moderation'
    },
    hex16: {
        id: 16,
        name: 'Yü',
        image: '/images/hexagrams/16.png',
        desc: 'Enthusiasm, Revelry, Celebration'
    },
    hex17: {
        id: 17,
        name: 'Sui',
        image: '/images/hexagrams/17.png',
        desc: 'Leading and Following'
    },
    hex18: {
        id: 18,
        name: 'Ku',
        image: '/images/hexagrams/18.png',
        desc: 'Correcting Deficiencies'
    },
    hex19: {
        id: 19,
        name: 'Lin',
        image: '/images/hexagrams/19.png',
        desc: 'Advancing, Progress'
    },
    hex20: {
        id: 20,
        name: 'Kuan',
        image: '/images/hexagrams/20.png',
        desc:
            'Looking Inward, Seeing the World Outwardly, Being Looked Up To as an Example'
    },
    hex21: {
        id: 21,
        name: 'Shih Ho',
        image: '/images/hexagrams/21.png',
        desc: 'Corrective Punishment'
    },
    hex22: {
        id: 22,
        name: 'Pi',
        image: '/images/hexagrams/22.png',
        desc: 'Outer Refinement'
    },
    hex23: {
        id: 23,
        name: 'Po',
        image: '/images/hexagrams/23.png',
        desc: 'Undermining, Overthrowing, Ending a Relationship'
    },
    hex24: {
        id: 24,
        name: 'Fu',
        image: '/images/hexagrams/24.png',
        desc: 'Return of the Light Force'
    },
    hex25: {
        id: 25,
        name: 'Wu Wang',
        image: '/images/hexagrams/25.png',
        desc: 'Innocent Action, Unexpected Misfortune'
    },
    hex26: {
        id: 26,
        name: "Ta C'hu",
        image: '/images/hexagrams/26.png',
        desc: 'Great Restraint'
    },
    hex27: {
        id: 27,
        name: 'I',
        image: '/images/hexagrams/27.png',
        desc: 'Providing Sustenance'
    },
    hex28: {
        id: 28,
        name: 'Ta Kuo',
        image: '/images/hexagrams/28.png',
        desc: 'Excess'
    },
    hex29: {
        id: 29,
        name: "K'an",
        image: '/images/hexagrams/29.png',
        desc: 'Danger, The Abyss'
    },
    hex30: {
        id: 30,
        name: 'Li',
        image: '/images/hexagrams/30.png',
        desc: 'Clarity, Brightness, Adherence'
    },
    hex31: {
        id: 31,
        name: 'Hsien',
        image: '/images/hexagrams/31.png',
        desc: 'Attraction, Influence'
    },
    hex32: {
        id: 32,
        name: 'Hêng',
        image: '/images/hexagrams/32.png',
        desc: 'Endurance, Long-Lasting'
    },
    hex33: {
        id: 33,
        name: 'Tun',
        image: '/images/hexagrams/33.png',
        desc: 'Withdrawl, Retreat'
    },
    hex34: {
        id: 34,
        name: 'Ta Chuang',
        image: '/images/hexagrams/34.png',
        desc: 'Great Power, Great Strength'
    },
    hex35: {
        id: 35,
        name: 'Chin',
        image: '/images/hexagrams/35.png',
        desc: 'Great Progress'
    },
    hex36: {
        id: 36,
        name: 'Ming',
        image: '/images/hexagrams/36.png',
        desc: 'Persecution'
    },
    hex37: {
        id: 37,
        name: 'Chia Jên',
        image: '/images/hexagrams/37.png',
        desc: 'The Family, The Group'
    },
    hex38: {
        id: 38,
        name: "K'uei",
        image: '/images/hexagrams/38.png',
        desc: 'Alienation, Division'
    },
    hex39: {
        id: 39,
        name: 'Chien',
        image: '/images/hexagrams/39.png',
        desc: 'Dangerous Adversity'
    },
    hex40: {
        id: 40,
        name: 'Hsieh',
        image: '/images/hexagrams/40.png',
        desc: 'Abatement of Danger'
    },
    hex41: {
        id: 41,
        name: 'Sun',
        image: '/images/hexagrams/41.png',
        desc: 'Decrease'
    },
    hex42: {
        id: 42,
        name: 'I',
        image: '/images/hexagrams/42.png',
        desc: 'Increase'
    },
    hex43: {
        id: 43,
        name: 'Kuai',
        image: '/images/hexagrams/43.png',
        desc: 'Overthow of the Dark Force'
    },
    hex44: {
        id: 44,
        name: 'Kou',
        image: '/images/hexagrams/44.png',
        desc: 'Return of the Dark Force'
    },
    hex45: {
        id: 45,
        name: "Ts'ui",
        image: '/images/hexagrams/45.png',
        desc: 'Gathering Together, Joining'
    },
    hex46: {
        id: 46,
        name: 'Shêng',
        image: '/images/hexagrams/46.png',
        desc: 'Advance'
    },
    hex47: {
        id: 47,
        name: "K'un",
        image: '/images/hexagrams/47.png',
        desc: 'Oppression'
    },
    hex48: {
        id: 48,
        name: 'Ching',
        image: '/images/hexagrams/48.png',
        desc: 'The Well'
    },
    hex49: {
        id: 49,
        name: 'Ko',
        image: '/images/hexagrams/49.png',
        desc: 'Achievement'
    },
    hex50: {
        id: 50,
        name: 'Ting',
        image: '/images/hexagrams/50.png',
        desc: 'The Cauldron'
    },
    hex51: {
        id: 51,
        name: 'Chên',
        image: '/images/hexagrams/51.png',
        desc: 'Shock, The Arousing'
    },
    hex52: {
        id: 52,
        name: 'Kên',
        image: '/images/hexagrams/52.png',
        desc: 'Mountain, Stopping, Thoughts Coming to Rest'
    },
    hex53: {
        id: 53,
        name: 'Chien',
        image: '/images/hexagrams/53.png',
        desc: 'Gradual Development'
    },
    hex54: {
        id: 54,
        name: 'Kuei Mei',
        image: '/images/hexagrams/54.png',
        desc: 'Entrance into or Maintaining a Relationship'
    },
    hex55: {
        id: 55,
        name: 'Fêng',
        image: '/images/hexagrams/55.png',
        desc: 'Maximum Abundance'
    },
    hex56: {
        id: 56,
        name: 'Lü',
        image: '/images/hexagrams/56.png',
        desc: 'The Wanderer, The Traveler'
    },
    hex57: {
        id: 57,
        name: 'Sun',
        image: '/images/hexagrams/57.png',
        desc: 'Gently Penetrating'
    },
    hex58: {
        id: 58,
        name: 'Tui',
        image: '/images/hexagrams/58.png',
        desc: 'Joyousness, Pleasure'
    },
    hex59: {
        id: 59,
        name: 'Huan',
        image: '/images/hexagrams/59.png',
        desc: 'Dissolve, Disintegrate, Dissipate, Unify'
    },
    hex60: {
        id: 60,
        name: 'Chieh',
        image: '/images/hexagrams/60.png',
        desc: 'Setting Limitiations'
    },
    hex61: {
        id: 61,
        name: 'Chung Fu',
        image: '/images/hexagrams/61.png',
        desc: 'Emptiness, Openness'
    },
    hex62: {
        id: 62,
        name: 'Hsiao Kuo',
        image: '/images/hexagrams/62.png',
        desc: 'Attention to Detail and Small Tasks, Avoiding Excesses'
    },
    hex63: {
        id: 63,
        name: 'Chi Chi',
        image: '/images/hexagrams/63.png',
        desc: 'Completion, In Place, In Order'
    },
    hex64: {
        id: 64,
        name: 'Wei Chi',
        image: '/images/hexagrams/64.png',
        desc: 'In Order, Out of Place'
    }
};

export default hexes;
