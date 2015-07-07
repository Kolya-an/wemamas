<?php
namespace app\components;
use yii\base\Widget;

class PromoWidget extends Widget {
    public function init() {
        parent::init();        
    }
    public function run() {
        return $this->render('promo');
    }
}
