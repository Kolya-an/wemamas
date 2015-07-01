<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "kurs".
 *
 * @property integer $kurs_id
 * @property string $kurs_name
 */
class Kurs extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'kurs';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['kurs_name'], 'required'],
            [['kurs_name'], 'string', 'max' => 255],
            
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'kurs_id' => 'Kurs ID',
            'kurs_name' => 'Kurs Name',
            'kursStatusName' => 'Kurs Status Name',
        ];
    }
    
    public function getKursStatus()
    {
    return $this->hasOne(KursStatus::className(), ['kurs_status_id' => 'kurs_status_id']);
    }
 
    public function getKursStatusName() 
    {
    return $this->kursStatus->kurs_status_name;
    }

}
