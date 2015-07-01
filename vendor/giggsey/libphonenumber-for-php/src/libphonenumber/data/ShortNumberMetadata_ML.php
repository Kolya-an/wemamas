<?php
/**
 * This file is automatically @generated by {@link BuildMetadataPHPFromXml}.
 * Please don't modify it directly.
 */


return array (
  'generalDesc' => 
  array (
    'NationalNumberPattern' => '[1367]\\d{1,4}',
    'PossibleNumberPattern' => '\\d{2,5}',
  ),
  'fixedLine' => 
  array (
    'NationalNumberPattern' => '[1367]\\d{1,4}',
    'PossibleNumberPattern' => '\\d{2,5}',
  ),
  'mobile' => 
  array (
    'NationalNumberPattern' => '[1367]\\d{1,4}',
    'PossibleNumberPattern' => '\\d{2,5}',
  ),
  'tollFree' => 
  array (
    'NationalNumberPattern' => '
          35200|
          67(?:
            00|
            77
          )|
          74(?:
            02|
            44
          )
        ',
    'PossibleNumberPattern' => '\\d{4,5}',
    'ExampleNumber' => '35200',
  ),
  'premiumRate' => 
  array (
    'NationalNumberPattern' => '
          122[13]|
          3(?:
            52(?:
              11|
              2[02]|
              3[04-6]|
              99
            )|
            7574
          )
        ',
    'PossibleNumberPattern' => '\\d{4,5}',
    'ExampleNumber' => '35211',
  ),
  'sharedCost' => 
  array (
    'NationalNumberPattern' => 'NA',
    'PossibleNumberPattern' => 'NA',
  ),
  'personalNumber' => 
  array (
    'NationalNumberPattern' => 'NA',
    'PossibleNumberPattern' => 'NA',
  ),
  'voip' => 
  array (
    'NationalNumberPattern' => 'NA',
    'PossibleNumberPattern' => 'NA',
  ),
  'pager' => 
  array (
    'NationalNumberPattern' => 'NA',
    'PossibleNumberPattern' => 'NA',
  ),
  'uan' => 
  array (
    'NationalNumberPattern' => 'NA',
    'PossibleNumberPattern' => 'NA',
  ),
  'emergency' => 
  array (
    'NationalNumberPattern' => '
          1(?:
            12|
            [578]
          )
        ',
    'PossibleNumberPattern' => '\\d{2,3}',
    'ExampleNumber' => '17',
  ),
  'voicemail' => 
  array (
    'NationalNumberPattern' => 'NA',
    'PossibleNumberPattern' => 'NA',
  ),
  'shortCode' => 
  array (
    'NationalNumberPattern' => '
          1(?:
            1(?:
              2|
              [013-9]\\d
            )|
            2(?:
              1[02-469]|
              2[13]
            )|
            [578]
          )|
          3(?:
            5(?:
              0(?:
                35|
                57
              )|
              2(?:
                00|
                11|
                2[02]|
                3[04-6]
                5[0-25-8]|
                6[0-69]|
                7[0-47]|
                80|
                99
              )
            )|
            6(?:
              666|
              777
            )|
            7(?:
              4\\d{2}|
              5(?:
                05|
                1[59]|
                25|
                5[57]|
                7[45]
              )
            )
          )|
          67(?:
            0[09]|
            59|
            77|
            8[89]|
            99
          )|
          74(?:
            0[02]|
            44|
            55
          )
        ',
    'PossibleNumberPattern' => '\\d{2,5}',
    'ExampleNumber' => '1210',
  ),
  'standardRate' => 
  array (
    'NationalNumberPattern' => '
          37(?:
            433|
            575
          )|
          7400
        ',
    'PossibleNumberPattern' => '\\d{4,5}',
    'ExampleNumber' => '7400',
  ),
  'carrierSpecific' => 
  array (
    'NationalNumberPattern' => '
          3(?:
            5035|
            6\\d{3}
          )
        ',
    'PossibleNumberPattern' => '\\d{5}',
    'ExampleNumber' => '35035',
  ),
  'noInternationalDialling' => 
  array (
    'NationalNumberPattern' => 'NA',
    'PossibleNumberPattern' => 'NA',
  ),
  'id' => 'ML',
  'countryCode' => 0,
  'internationalPrefix' => '',
  'sameMobileAndFixedLinePattern' => true,
  'numberFormat' => 
  array (
  ),
  'intlNumberFormat' => 
  array (
  ),
  'mainCountryForCode' => false,
  'leadingZeroPossible' => false,
  'mobileNumberPortableRegion' => false,
);
