<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\Reg */

$this->title = 'Reg';
/*$this->params['breadcrumbs'][] = ['label' => 'Regs', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;*/
?>
<div class="reg-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
