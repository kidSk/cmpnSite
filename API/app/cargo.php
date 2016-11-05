<?php

namespace cmpn;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class cargo extends Model
{
	use SoftDeletes;
	protected $table="cargos";
	protected $fillable = ['name'];
	protected $dates = ['delete_at'];

}
