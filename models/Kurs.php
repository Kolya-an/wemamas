<?php

namespace app\models;

use Yii;
use \dektrium\user\models\Profile;
use \dektrium\user\models\User;
use app\models\CategoryKurs;

/**
 * This is the model class for table "kurs".
 *
 * @property integer $kurs_id
 * @property string $kurs_name
 */
class Kurs extends \yii\db\ActiveRecord
{   public $category_kurs_name;
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
            [['kurs_name', 'category_kurs_name'], 'string', 'max' => 255],
            [['categoryKurs', 'category_kurs_name'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'kurs_id' => 'Kurs ID',
            'category_kurs_id' => 'Kurs ID',
            'kurs_name' => 'Kurs Name',
            'kursStatusName' => 'Kurs Status Name',
            'kursTeacher'    => 'Преподаватель',
            'user_id'   => 'Преподаватель',
            'kursTeacherCategory'   => 'Преподаватель',
            'category_kurs_name'   => 'Раздел',
            'сategoryKurs'   => 'Раздел',
            'сategoryKursName'   => 'Раздел',
        ];
    }
    
    public function getKursStatus()
    {
    return $this->hasOne(KursStatus::className(), ['kurs_status_id' => 'kurs_status_id']);
    }
    
    public function getCategoryKurs()
    {
    return $this->hasOne(CategoryKurs::className(), ['category_kurs_id' => 'category_kurs_id']);
    }
 
    public function getKursStatusName() 
    {
    return $this->kursStatus->kurs_status_name;
    }
    
     public function getCategoryKursName() 
    {
    return $this->categoryKurs->category_kurs_name;
    }
     public function getKursTeacher()
    {
    return $this->hasOne(Profile::className(), ['user_id' => 'user_id']);
    }
 
    public function getKursTeacherName() 
    {
    return $this->kursTeacher->name;
    }
    public function getKursTeacherCategory()
    {
    return $this->hasOne(User::className(), ['user_id' => 'category_id']);
    }
    public function setCategoryKurs()
    {
    return $this->categoryKurs;
    }
   
}
