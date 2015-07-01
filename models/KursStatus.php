<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "kurs_status".
 *
 * @property integer $kurs_status_id
 * @property string $kurs_status_name
 */
class KursStatus extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'kurs_status';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['kurs_status_id', 'kurs_status_name'], 'required'],
            [['kurs_status_id'], 'integer'],
            [['kurs_status_name'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'kurs_status_id' => 'Kurs Status ID',
            'kurs_status_name' => 'Kurs Status Name',
            'Kurs' => 'Kurs Status Name',
        ];
    }
    
    public function getKurs()
    {
        return $this->hasOne(Kurs::className(), ['kurs_status_id' => 'kurs_status_id']);
    }
}
