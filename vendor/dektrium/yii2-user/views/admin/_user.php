<?php

/*
 * This file is part of the Dektrium project.
 *
 * (c) Dektrium project <http://github.com/dektrium>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

/**
 * @var yii\widgets\ActiveForm    $form
 * @var dektrium\user\models\User $user
 */
use yii\helpers\ArrayHelper;
use app\models\Category;
?>

<?= $form->field($user, 'username')->textInput(['maxlength' => 25]) ?>
<?= $form->field($user, 'email')->textInput(['maxlength' => 255]) ?>
 <?= $form->field($user, 'category_id')->dropDownList(ArrayHelper::map(Category::find()->all(),'category_id','category_name')); ?>
<?= $form->field($user, 'password')->passwordInput() ?>
