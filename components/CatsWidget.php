<?php
namespace app\components;
use yii\base\Widget;

class CatsWidget extends Widget {
    public function init() {
        parent::init();        
    }
    public function run() {
        return $this->render('cats');
    }
}

