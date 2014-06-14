// Compiled by ClojureScript 0.0-2234
goog.provide('go.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
go.core.board_size_choices = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [9,11,13,19], null);
go.core.board_size = 11;
go.core.square = (function square(n){return (n * n);
});
go.core.board = cljs.core.vec.call(null,cljs.core.repeat.call(null,go.core.square.call(null,go.core.board_size),new cljs.core.Keyword(null,"empty","empty",1110538431)));
go.core.board_text = (function board_text(board){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",(function (){var iter__4263__auto__ = (function iter__5994(s__5995){return (new cljs.core.LazySeq(null,(function (){var s__5995__$1 = s__5995;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5995__$1);if(temp__4126__auto__)
{var s__5995__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5995__$2))
{var c__4261__auto__ = cljs.core.chunk_first.call(null,s__5995__$2);var size__4262__auto__ = cljs.core.count.call(null,c__4261__auto__);var b__5997 = cljs.core.chunk_buffer.call(null,size__4262__auto__);if((function (){var i__5996 = 0;while(true){
if((i__5996 < size__4262__auto__))
{var row = cljs.core._nth.call(null,c__4261__auto__,i__5996);cljs.core.chunk_append.call(null,b__5997,(function (){var start = (row * go.core.board_size);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subvec.call(null,board,start,(start + go.core.board_size))));
})());
{
var G__5998 = (i__5996 + 1);
i__5996 = G__5998;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5997),iter__5994.call(null,cljs.core.chunk_rest.call(null,s__5995__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5997),null);
}
} else
{var row = cljs.core.first.call(null,s__5995__$2);return cljs.core.cons.call(null,(function (){var start = (row * go.core.board_size);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subvec.call(null,board,start,(start + go.core.board_size))));
})(),iter__5994.call(null,cljs.core.rest.call(null,s__5995__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4263__auto__.call(null,cljs.core.range.call(null,go.core.board_size));
})()));
});

/**
* @constructor
*/
go.core.GameState = (function (board,turn){
this.board = board;
this.turn = turn;
})
go.core.GameState.cljs$lang$type = true;
go.core.GameState.cljs$lang$ctorStr = "go.core/GameState";
go.core.GameState.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opts__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"go.core/GameState");
});
go.core.__GT_GameState = (function __GT_GameState(board,turn){return (new go.core.GameState(board,turn));
});
go.core.board_elem = document.getElementById("board");
go.core.board_elem.innerHTML = go.core.board_text.call(null,go.core.board);

//# sourceMappingURL=core.js.map