<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Kurs */

$this->title = $model->kurs_id;
$this->params['breadcrumbs'][] = ['label' => 'Kurs', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="kurs-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->kurs_id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->kurs_id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'kurs_id',
            'kurs_name',
            'kurs_url:url',
            'kursStatusName',
            'kurs_brief:ntext',
            'kurs_subscribe:ntext',
            'kurs_teacher_id',
            'kurs_anons',
            'kurs_tizer',
            'kurs_whom:ntext',
        ],
    ]) ?>

</div>
