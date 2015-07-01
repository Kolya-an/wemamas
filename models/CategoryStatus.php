<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "category_status".
 *
 * @property integer $category_status_id
 * @property string $category_status_name
 */
class CategoryStatus extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'category_status';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['category_status_name'], 'required'],
            [['category_status_name'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'category_status_id' => 'Category Status ID',
            'category_status_name' => 'Category Status Name',
        ];
    }
}
