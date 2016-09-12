<?php

namespace cmpn;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class dep extends Model
{
	use SoftDeletes;
	protected $table="departamento";
	protected $fillable = ['name','responsavel'];
	protected $dates = ['delete_at'];
}
