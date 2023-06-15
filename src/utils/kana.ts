export function isKanji(ch: string) {
  ch = ch[0]
  return (ch >= '\u4e00' && ch <= '\u9fcf') || (ch >= '\uf900' && ch <= '\ufaff') || (ch >= '\u3400' && ch <= '\u4dbf')
}

export const kanaToRomajiDict: { [key: string]: string[] } = {
  あ: ['a'],
  い: ['i'],
  う: ['u'],
  え: ['e'],
  お: ['o'],
  ア: ['a'],
  イ: ['i'],
  ウ: ['u'],
  エ: ['e'],
  オ: ['o'],
  か: ['ka'],
  き: ['ki'],
  く: ['ku'],
  け: ['ke'],
  こ: ['ko'],
  カ: ['ka'],
  キ: ['ki'],
  ク: ['ku'],
  ケ: ['ke'],
  コ: ['ko'],
  さ: ['sa'],
  し: ['shi', 'si'],
  す: ['su'],
  せ: ['se'],
  そ: ['so'],
  サ: ['sa'],
  シ: ['shi', 'si'],
  ス: ['su'],
  セ: ['se'],
  ソ: ['so'],
  た: ['ta'],
  ち: ['chi', 'ti'],
  つ: ['tsu', 'tu'],
  て: ['te'],
  と: ['to'],
  タ: ['ta'],
  チ: ['chi', 'ti'],
  ツ: ['tsu', 'tu'],
  テ: ['te'],
  ト: ['to'],
  な: ['na'],
  に: ['ni'],
  ぬ: ['nu'],
  ね: ['ne'],
  の: ['no'],
  ナ: ['na'],
  ニ: ['ni'],
  ヌ: ['nu'],
  ネ: ['ne'],
  ノ: ['no'],
  は: ['ha'],
  ひ: ['hi'],
  ふ: ['fu', 'hu'],
  へ: ['he'],
  ほ: ['ho'],
  ハ: ['ha'],
  ヒ: ['hi'],
  フ: ['fu', 'hu'],
  ヘ: ['he'],
  ホ: ['ho'],
  ま: ['ma'],
  み: ['mi'],
  む: ['mu'],
  め: ['me'],
  も: ['mo'],
  マ: ['ma'],
  ミ: ['mi'],
  ム: ['mu'],
  メ: ['me'],
  モ: ['mo'],
  や: ['ya'],
  ゆ: ['yu'],
  よ: ['yo'],
  ヤ: ['ya'],
  ユ: ['yu'],
  ヨ: ['yo'],
  ら: ['ra'],
  り: ['ri'],
  る: ['ru'],
  れ: ['re'],
  ろ: ['ro'],
  ラ: ['ra'],
  リ: ['ri'],
  ル: ['ru'],
  レ: ['re'],
  ロ: ['ro'],
  わ: ['wa'],
  ゐ: ['i'],
  ゑ: ['e'],
  を: ['o'],
  ワ: ['wa'],
  ヰ: ['i'],
  ヱ: ['e'],
  ヲ: ['o'],
  が: ['ga'],
  ぎ: ['gi'],
  ぐ: ['gu'],
  げ: ['ge'],
  ご: ['go'],
  ガ: ['ga'],
  ギ: ['gi'],
  グ: ['gu'],
  ゲ: ['ge'],
  ゴ: ['go'],
  ざ: ['za'],
  じ: ['ji', 'zi'],
  ず: ['zu'],
  ぜ: ['ze'],
  ぞ: ['zo'],
  ザ: ['za'],
  ジ: ['ji', 'zi'],
  ズ: ['zu'],
  ゼ: ['ze'],
  ゾ: ['zo'],
  だ: ['da'],
  ぢ: ['ji'],
  づ: ['zu'],
  で: ['de'],
  ど: ['do'],
  ダ: ['da'],
  ヂ: ['ji'],
  ヅ: ['zu'],
  デ: ['de'],
  ド: ['do'],
  ば: ['ba'],
  び: ['bi'],
  ぶ: ['bu'],
  べ: ['be'],
  ぼ: ['bo'],
  バ: ['ba'],
  ビ: ['bi'],
  ブ: ['bu'],
  ベ: ['be'],
  ボ: ['bo'],
  ぱ: ['pa'],
  ぴ: ['pi'],
  ぷ: ['pu'],
  ぺ: ['pe'],
  ぽ: ['po'],
  パ: ['pa'],
  ピ: ['pi'],
  プ: ['pu'],
  ペ: ['pe'],
  ポ: ['po'],
  きゃ: ['kya'],
  きゅ: ['kyu'],
  きょ: ['kyo'],
  しゃ: ['sha', 'sya'],
  しゅ: ['shu', 'syu'],
  しょ: ['sho', 'syo'],
  ちゃ: ['cha', 'cya'],
  ちゅ: ['chu', 'cyu'],
  ちょ: ['cho', 'cyo'],
  にゃ: ['nya'],
  にゅ: ['nyu'],
  にょ: ['nyo'],
  ひゃ: ['hya'],
  ひゅ: ['hyu'],
  ひょ: ['hyo'],
  みゃ: ['mya'],
  みゅ: ['myu'],
  みょ: ['myo'],
  りゃ: ['rya'],
  りゅ: ['ryu'],
  りょ: ['ryo'],
  キャ: ['kya'],
  キュ: ['kyu'],
  キョ: ['kyo'],
  シャ: ['sha', 'sya'],
  シュ: ['shu', 'syu'],
  ショ: ['sho', 'syo'],
  チャ: ['cha', 'cya'],
  チュ: ['chu', 'cyu'],
  チョ: ['cho', 'cyo'],
  ニャ: ['nya'],
  ニュ: ['nyu'],
  ニョ: ['nyo'],
  ヒャ: ['hya'],
  ヒュ: ['hyu'],
  ヒョ: ['hyo'],
  ミャ: ['mya'],
  ミュ: ['myu'],
  ミョ: ['myo'],
  リャ: ['rya'],
  リュ: ['ryu'],
  リョ: ['ryo'],
  ぎゃ: ['gya', 'zya'],
  ぎゅ: ['gyu', 'zyu'],
  ぎょ: ['gyo', 'zyo'],
  じゃ: ['ja', 'jya'],
  じゅ: ['ju', 'jyu'],
  じょ: ['jo', 'jyo'],
  ぢゃ: ['ja', 'jya'],
  ぢゅ: ['ju', 'jyu'],
  ぢょ: ['jo', 'jyo'],
  びゃ: ['bya'],
  びゅ: ['byu'],
  びょ: ['byo'],
  ぴゃ: ['pya'],
  ぴゅ: ['pyu'],
  ぴょ: ['pyo'],
  ギャ: ['gya', 'zya'],
  ギュ: ['gyu', 'zyu'],
  ギョ: ['gyo', 'zyo'],
  ジャ: ['ja', 'jya'],
  ジュ: ['ju', 'jyu'],
  ジョ: ['jo', 'jyo'],
  ヂャ: ['ja', 'jya'],
  ヂュ: ['ju', 'jyu'],
  ヂョ: ['jo', 'jyo'],
  ビャ: ['bya'],
  ビュ: ['byu'],
  ビョ: ['byo'],
  ピャ: ['pya'],
  ピュ: ['pyu'],
  ピョ: ['pyo'],
  いぇ: ['ye'],
  うぃ: ['wi'],
  うぇ: ['we'],
  うぉ: ['wo'],
  きぇ: ['kye'],
  くぁ: ['kwa'],
  くぃ: ['kwi'],
  くぇ: ['kwe'],
  くぉ: ['kwo'],
  ぐぁ: ['gwa'],
  ぐぃ: ['gwi'],
  ぐぇ: ['gwe'],
  ぐぉ: ['gwo'],
  イェ: ['ye'],
  ウィ: ['wi'],
  ウェ: ['we'],
  ウォ: ['wo'],
  ヴ: ['vu'],
  ヴァ: ['va'],
  ヴィ: ['vi'],
  ヴェ: ['ve'],
  ヴォ: ['vo'],
  ヴュ: ['vyu'],
  ヴョ: ['vyo'],
  キェ: ['kya'],
  クァ: ['kwa'],
  クィ: ['kwi'],
  クェ: ['kwe'],
  クォ: ['kwo'],
  グァ: ['gwa'],
  グィ: ['gwi'],
  グェ: ['gwe'],
  グォ: ['gwo'],
  しぇ: ['she'],
  じぇ: ['je'],
  ちぇ: ['che'],
  つぁ: ['tsa'],
  つぃ: ['tsi'],
  つぇ: ['tse'],
  つぉ: ['tso'],
  てぃ: ['ti'],
  てゅ: ['tyu'],
  でぃ: ['di'],
  でゅ: ['dyu'],
  とぅ: ['tu'],
  どぅ: ['du'],
  にぇ: ['nye'],
  ひぇ: ['hye'],
  ふぁ: ['fa'],
  ふぃ: ['fi'],
  ふぇ: ['fe'],
  ふぉ: ['fo'],
  ふゅ: ['fyu'],
  ふょ: ['fyo'],
  シェ: ['she'],
  ジェ: ['je'],
  チェ: ['che'],
  ツァ: ['tsa'],
  ツィ: ['tsi'],
  ツェ: ['tse'],
  ツォ: ['tso'],
  ティ: ['ti'],
  テュ: ['tyu'],
  ディ: ['di'],
  デュ: ['dyu'],
  トゥ: ['tu'],
  ドゥ: ['du'],
  ニェ: ['nye'],
  ヒェ: ['hye'],
  ファ: ['fa'],
  フィ: ['fi'],
  フェ: ['fe'],
  フォ: ['fo'],
  フュ: ['fyu'],
  フョ: ['fyo'],
  ー: ['-'],
  ん: ['nn'],
  ン: ['nn'],
}

/**
 * source: https://github.com/andree-surya/moji4j
 */
export function romajiToHiragana(romaji: string): string {
  const changeStr: string = romaji.toLowerCase()
  const resultStr: string[] = changeStr.split('')

  for (let i = 0; i < changeStr.length - 1; i++) {
    const currentCharacter = changeStr[i]
    const nextCharacter = changeStr[i + 1]

    const isDoubleConsonant = currentCharacter == nextCharacter && currentCharacter !== 'n'
    const isExceptionalCase = currentCharacter == 't' && nextCharacter == 'c'

    if (isRomanConsonant(currentCharacter) && (isDoubleConsonant || isExceptionalCase)) {
      resultStr[i] = 'っ'
    }
  }

  let result = ''
  let currentOffset = 0
  while (currentOffset < resultStr.length) {
    const maxSubstringLength = Math.min(4, resultStr.length - currentOffset)

    for (let substringLength = maxSubstringLength; substringLength > 0; substringLength--) {
      const substring = resultStr.slice(currentOffset, currentOffset + substringLength)

      const replacementString: string = romajiToHiraganaJson[substring.join('')]

      if (replacementString !== undefined && replacementString !== null) {
        result += replacementString
        currentOffset += substring.length
        break
      }

      if (substringLength == 1) {
        result += substring

        currentOffset += 1
        break
      }
    }
  }

  return result
}

function isRomanConsonant(character: string): boolean {
  return character >= 'a' && character <= 'z' && !isRomanVowel(character)
}

function isRomanVowel(character: string): boolean {
  return character == 'a' || character == 'i' || character == 'u' || character == 'e' || character == 'o'
}

interface RomajiToHiragana {
  [key: string]: string
}
const romajiToHiraganaJson: RomajiToHiragana = {
  a: 'あ',
  i: 'い',
  u: 'う',
  e: 'え',
  o: 'お',
  '-': 'ー',
  xa: 'ぁ',
  xi: 'ぃ',
  xu: 'ぅ',
  xe: 'ぇ',
  xo: 'ぉ',
  ka: 'か',
  ki: 'き',
  ku: 'く',
  ke: 'け',
  ko: 'こ',
  ca: 'か',
  cu: 'く',
  co: 'こ',
  ga: 'が',
  gi: 'ぎ',
  gu: 'ぐ',
  ge: 'げ',
  go: 'ご',
  sa: 'さ',
  si: 'し',
  su: 'す',
  se: 'せ',
  so: 'そ',
  za: 'ざ',
  zi: 'じ',
  zu: 'ず',
  ze: 'ぜ',
  zo: 'ぞ',
  ja: 'じゃ',
  ji: 'じ',
  ju: 'じゅ',
  je: 'じぇ',
  jo: 'じょ',
  ta: 'た',
  ti: 'ち',
  tu: 'つ',
  te: 'て',
  to: 'と',
  da: 'だ',
  di: 'ぢ',
  du: 'づ',
  de: 'で',
  do: 'ど',
  na: 'な',
  ni: 'に',
  nu: 'ぬ',
  ne: 'ね',
  no: 'の',
  ha: 'は',
  hi: 'ひ',
  hu: 'ふ',
  he: 'へ',
  ho: 'ほ',
  ba: 'ば',
  bi: 'び',
  bu: 'ぶ',
  be: 'べ',
  bo: 'ぼ',
  pa: 'ぱ',
  pi: 'ぴ',
  pu: 'ぷ',
  pe: 'ぺ',
  po: 'ぽ',
  va: 'ヴぁ',
  vi: 'ヴぃ',
  vu: 'ヴ',
  ve: 'ヴぇ',
  vo: 'ヴぉ',
  fa: 'ふぁ',
  fi: 'ふぃ',
  fu: 'ふ',
  fe: 'ふぇ',
  fo: 'ふぉ',
  ma: 'ま',
  mi: 'み',
  mu: 'む',
  me: 'め',
  mo: 'も',
  ya: 'や',
  yi: 'い',
  yu: 'ゆ',
  ye: 'いぇ',
  yo: 'よ',
  ra: 'ら',
  ri: 'り',
  ru: 'る',
  re: 'れ',
  ro: 'ろ',
  la: 'ら',
  li: 'り',
  lu: 'る',
  le: 'れ',
  lo: 'ろ',
  wa: 'わ',
  wi: 'ゐ',
  wu: 'う',
  we: 'ゑ',
  wo: 'を',
  tsu: 'つ',
  xka: 'ヵ',
  xke: 'ヶ',
  xwa: 'ゎ',
  xtsu: 'っ',
  xya: 'ゃ',
  xyu: 'ゅ',
  xyo: 'ょ',
  kya: 'きゃ',
  kyi: 'きぃ',
  kyu: 'きゅ',
  kye: 'きぇ',
  kyo: 'きょ',
  gya: 'ぎゃ',
  gyi: 'ぎぃ',
  gyu: 'ぎゅ',
  gye: 'ぎぇ',
  gyo: 'ぎょ',
  sya: 'しゃ',
  syi: 'しぃ',
  syu: 'しゅ',
  sye: 'しぇ',
  syo: 'しょ',
  sha: 'しゃ',
  shi: 'し',
  shu: 'しゅ',
  she: 'しぇ',
  sho: 'しょ',
  zya: 'じゃ',
  zyi: 'じぃ',
  zyu: 'じゅ',
  zye: 'じぇ',
  zyo: 'じょ',
  jya: 'じゃ',
  jyi: 'じぃ',
  jyu: 'じゅ',
  jye: 'じぇ',
  jyo: 'じょ',
  tya: 'ちゃ',
  tyi: 'ちぃ',
  tyu: 'ちゅ',
  tye: 'ちぇ',
  tyo: 'ちょ',
  cya: 'ちゃ',
  cyi: 'ちぃ',
  cyu: 'ちゅ',
  cye: 'ちぇ',
  cyo: 'ちょ',
  cha: 'ちゃ',
  chi: 'ち',
  chu: 'ちゅ',
  che: 'ちぇ',
  cho: 'ちょ',
  tha: 'てゃ',
  thi: 'てぃ',
  thu: 'てゅ',
  the: 'てぇ',
  tho: 'てょ',
  dya: 'ぢゃ',
  dyi: 'ぢぃ',
  dyu: 'ぢゅ',
  dye: 'ぢぇ',
  dyo: 'ぢょ',
  dha: 'でゃ',
  dhi: 'でぃ',
  dhu: 'でゅ',
  dhe: 'でぇ',
  dho: 'でょ',
  nya: 'にゃ',
  nyi: 'にぃ',
  nyu: 'にゅ',
  nye: 'にぇ',
  nyo: 'にょ',
  hya: 'ひゃ',
  hyi: 'ひぃ',
  hyu: 'ひゅ',
  hye: 'ひぇ',
  hyo: 'ひょ',
  bya: 'びゃ',
  byi: 'びぃ',
  byu: 'びゅ',
  bye: 'びぇ',
  byo: 'びょ',
  pya: 'ぴゃ',
  pyi: 'ぴぃ',
  pyu: 'ぴゅ',
  pye: 'ぴぇ',
  pyo: 'ぴょ',
  mya: 'みゃ',
  myi: 'みぃ',
  myu: 'みゅ',
  mye: 'みぇ',
  myo: 'みょ',
  rya: 'りゃ',
  ryi: 'りぃ',
  ryu: 'りゅ',
  rye: 'りぇ',
  ryo: 'りょ',
  lya: 'りゃ',
  lyi: 'りぃ',
  lyu: 'りゅ',
  lye: 'りぇ',
  lyo: 'りょ',
  n: 'ん',
  m: 'ん',
  "n'": 'ん',
  dzu: 'づ',
}
