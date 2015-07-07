<?php

/*
 * This file is part of the Dektrium project.
 *
 * (c) Dektrium project <http://github.com/dektrium/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace dektrium\user\models;

use yii\db\ActiveRecord;
use udokmeci\yii2PhoneValidator\PhoneValidator;
use yii\web\UploadedFile;

/**
 * This is the model class for table "profile".
 *
 * @property integer $user_id
 * @property string  $name
 * @property string  $public_email
 * @property string  $office
 * @property string  $phone
 * @property string  $location
 * @property string  $website
 * @property string  $bio
 *
 * @author Dmitry Erofeev <dmeroff@gmail.com
 */
class Profile extends ActiveRecord
{
    /** @var \dektrium\user\Module */
    protected $module;
    public $file;
    public $fileLogo;

    /** @inheritdoc */
    public function init()
    {
        $this->module = \Yii::$app->getModule('user');
    }

    /** @inheritdoc */
    public static function tableName()
    {
        return '{{%profile}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
//            'bioString' => ['bio', 'string', 'max' => 255],
            'publicEmailPattern' => ['public_email', 'email'],
            'phonePattern' => ['phone', 'udokmeci\yii2PhoneValidator\PhoneValidator','country'=>'RU'],
            'websiteUrl' => ['website', 'url'],
            'nameLength' => ['name', 'string', 'max' => 255],
            'publicEmailLength' => ['public_email', 'string', 'max' => 255],
            'officeLength' => ['office', 'string', 'max' => 255],
            'locationLength' => ['location', 'string', 'max' => 255],
            'websiteLength' => ['website', 'string', 'max' => 255],
            'subscribeBoolean' => ['subscribe', 'boolean'],
            'salaryInt' => ['salary', 'integer'],
            'percentInt' => ['percent', 'integer', 'max' => 100],
            'workString' => ['work', 'string', 'max' => 255],
            'fileFile' => ['file', 'file'],
            'logoFile' => ['fileLogo', 'file'],
            'photoString' => ['photo', 'string', 'max' => 100],
            'logoString' => ['logo', 'string', 'max' => 100],
            'experienceString' => ['experience', 'string', 'max' => 255],
            'achievementsString' => ['achievements', 'string', 'max' => 255],
            'birthdayDate' => ['birthday', 'date', 'format' => 'yyyy-mm-dd'],
        ];
    }

    /** @inheritdoc */
    public function attributeLabels()
    {
        return [
            'name'           => \Yii::t('user', 'Name'),
            'public_email'   => \Yii::t('user', 'Email (public)'),
            'phone'          => \Yii::t('user', 'Phone'),
            'office'         => \Yii::t('user', 'Office'),
            'location'       => \Yii::t('user', 'Location'),
            'website'        => \Yii::t('user', 'Website'),
            'bio'            => \Yii::t('user', 'Bio'),
            'category_id'    => \Yii::t('user', 'Category'),
            'subscribe'      => \Yii::t('user', 'Subscribe'),
            'salary'         => \Yii::t('user', 'Salary'),
            'work'           => \Yii::t('user', 'Work'),
            'experience'     => \Yii::t('user', 'Experience'),
            'percent'        => \Yii::t('user', 'Percent'),
            'achievements'   => \Yii::t('user', 'Achievements'),
            'file'           => \Yii::t('user', 'Photo'),
            'fileLogo'       => \Yii::t('user', 'Logo'),
            'userCategory'   => \Yii::t('user', 'Logo'),
        ];
    }

    /** @inheritdoc */
//    public function beforeSave($insert)
//    {
//        if (parent::beforeSave($insert)) {
//            if ($this->isAttributeChanged('function')) {
//                $this->setAttribute('phone', md5(strtolower($this->getAttribute('function'))));
//            }
//            return true;
//        }
//
//        return true;
//    }

    /**
     * @return \yii\db\ActiveQueryInterface
     */
    public function getUser()
    {
        return $this->hasOne($this->module->modelMap['User'], ['id' => 'user_id']);
    }
    
     public function getUserCategory()
    {
        return $this->$this->user->category_id;
    }
}
