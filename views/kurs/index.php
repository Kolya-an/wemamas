<?php

use yii\helpers\Html;
use yii\grid\GridView;
use app\models\KursStatus;
use app\models\Kurs;
use yii\helpers\ArrayHelper;

/* @var $this yii\web\View */
/* @var $searchModel app\models\KursSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Kurs';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="kurs-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Kurs', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'kurs_id',
            'kurs_name',
            'kurs_url:url',
//            'kursStatusName',
//            'kurs_status_id' => [
//                    'attribute' => 'kurs_status_id',
//                    'value' => 'kursStatusName',
//                'filter'=>Html::dropDownList('Attributes[type]', $model->type, CHtml::listData($types, 'id', 'name'), array('empty'=>'', 'style'=>'margin:0px;')),
//                ],
            'kursStatusName' => [
            'attribute' => 'kursStatusName',
            'label' => 'Category',
            'value' => 'kursStatusName',
            'filter' => Html::dropDownList(ArrayHelper::map(KursStatus::find()->orderBy('kurs_status_name')->asArray()->all(),'kurs_status_id','kurs_status_name'))
                 ],
            'kurs_brief:ntext',
            // 'kurs_subscribe:ntext',
            // 'kurs_teacher_id',
            // 'kurs_anons',
            // 'kurs_tizer',
            // 'kurs_whom:ntext',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>

</div>
